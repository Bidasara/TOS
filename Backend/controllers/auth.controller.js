import {User} from '../models/user.model.js' 
import { generateTokens, verifyRefreshToken } from '../utils/jwtUtils.js'
import crypto from 'crypto'
import { asyncHandler } from '../utils/asyncHandler.js'
import { ApiError } from '../utils/apiError.js'
import { uploadOnCloudinary } from '../utils/cloudinary.js'
import { ApiResponse } from '../utils/apiResponse.js'

const registerUser = asyncHandler( async (req,res) => {
    const { username, email, password, avatarLink } = req.body;

    if ([username, email, password].some((field) => !field || field?.trim() === "")) {
        throw new ApiError(400, 'Username, email, and password are required');
    }

    if (username.trim().length < 3) {
        throw new ApiError(400, 'Username must be at least 3 characters long');
    }

    if (password.length < 8) {
        throw new ApiError(400, 'Password must be at least 8 characters long');
    }

    const existingUser = await User.findOne({
        $or: [
            {username : username.toLowerCase()},
            {email : email.toLowerCase()}
        ]
    })

    if(existingUser)
    throw new ApiError(409, 'Username or email already exists');

    let avatarUrl;

    // Check if user uploaded a file or selected a default avatar
    if (req.file) {
        // User uploaded a custom file
        const avatarLocalPath = req.file.path;
        const avatar = await uploadOnCloudinary(avatarLocalPath);
        
        if(!avatar)
            throw new ApiError(500, 'Error uploading avatar to Cloudinary');
        
        avatarUrl = avatar.url;
    } else if (avatarLink) {
        // User selected a default avatar
        avatarUrl = avatarLink;
    } else {
        throw new ApiError(400, 'Avatar is required - either upload a file or select a default avatar');
    }
    
    const user = await User.create({
        username: username.toLowerCase(),
        email: email.toLowerCase(),
        password,
        avatar: avatarUrl
    })

    if(!user)
        throw new ApiError(500, 'Error creating user');

    const tokens = generateTokens(user);
    if(!tokens)
        throw new ApiError(500, 'Error generating tokens');

    res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    }) 
    return res.status(200).json(new ApiResponse(200, {
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            avatar: user.avatar
        },
        accessToken:tokens.accessToken
    }, 'User Signed in successfully'));
}) 

const login = asyncHandler( async (req,res) =>{
    
    const {username, email, password} =  req.body;

    if(!username && !email)
    throw new ApiError(400, 'Username or email is required');

    if(!password)
    throw new ApiError(400, 'Password is required');

    // Find user by username or email
    const user = await User.findOne({
        $or: [
            { username: username },
            { email: email }
        ]
    }).select('+password +failedLoginAttempts +lockedUntil');

    if(!user){
        throw new ApiError(401, 'Invalid username/email or password');
    }

    if(user.lockedUntil && user.lockedUntil > Date.now()){
        const timeLeft = Math.ceil((user.lockedUntil - Date.now())/1000);
        const formattedTime = new Date(user.lockedUntil).toLocaleString();
        throw new ApiError(403, `Account is locked until ${formattedTime} (${timeLeft} seconds remaining)`);
    }

    const isPasswordValid = await user.isPasswordCorrect(password);

    if(!isPasswordValid){
        user.failedLoginAttempts += 1;
        if(user.failedLoginAttempts >= 5){
            user.lockedUntil = Date.now() + 1 * 60 * 1000;
        }
        await user.save({validationBeforeSave : false});
        throw new ApiError(401, 'Invalid username/email or password');
    }

    // Reset failed login attempts on successful login
    user.failedLoginAttempts = 0;
    user.lockedUntil = null;
    await user.save({validateBeforeSave: false});
    

    const tokens = generateTokens(user);

    
    if(!tokens)
        throw new ApiError(500, 'Error generating tokens');

    res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    }) 
    return res.status(200).json(new ApiResponse(200, {
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
            avatar: user.avatar,
            
        },
        accessToken:tokens.accessToken
    }, 'User logged in successfully'));
})

const refreshToken = asyncHandler( async (req,res) =>{
    const refreshToken = req.cookies.refreshToken;

    if(!refreshToken)
        throw new ApiError(400, 'Refresh token is required');

    let decoded;
    try {
        decoded = verifyRefreshToken(refreshToken);
    } catch (err) {
        // If the token is invalid or expired, return 401 and do not continue
        return res.status(401).json({ success: false, message: 'Invalid or expired refresh token' });
    }

    const user = await User.findById(decoded.id);
    if(!user)
        throw new ApiError(403, 'User not found');

    const tokens = generateTokens(user);
    if(!tokens)
        throw new ApiError(500, 'Error generating tokens');

    res.cookie('refreshToken', tokens.refreshToken, {
        httpOnly: true,
        secure: true,
        sameSite: "Strict",
        maxAge: 7 * 24 * 60 * 60 * 1000 // 7 days
    });

    return res.status(200).json(new ApiResponse(200, {
        accessToken: tokens.accessToken,
        accessTokenExpiry: tokens.accessTokenExpiresIn,
        refreshTokenExpiry: tokens.refreshTokenExpiresIn
    }, 'Tokens refreshed successfully'));
})

const logout = asyncHandler( async (req,res) =>{
    res.clearCookie('refreshToken');
    return res.status(200).json({
        success: true,
        message: 'User logged out successfully'
    })
})

const forgotPassword = asyncHandler( async (req,res) =>{

    const { email } = req.body;

    if(!email)
    throw new ApiError(400, 'Email is required');

    const user = await User.findOne({ email });

    if(!user){
        return res.status(200).json(ApiResponse(200, null, 'If your email is registered, you will receive a password reset link'));
    }
    
    const resetToken = crypto.randomBytes(32).toString('hex');

    user.passwordResetToken = crypto
        .createHash('sha256')
        .update(resetToken)
        .digest('hex');

    user.passwordResetExpires = Date.now() + 10 * 60 * 1000;

    await user.save({validateBeforeSave: false});

    // Send email with reset token (not implemented here) for now just return it;

    return res.status(200).json(new ApiResponse(200, {user,resetToken : resetToken}, 'If your email is registered, you will receive a password reset link'))
});

const resetPassword = asyncHandler( async (req,res) =>{
    
    const { token, password } = req.body;

    if(!token || !password)
    throw new ApiError(400, 'Token and new password are required');

    const hashedToken = crypto
        .createHash('sha256')
        .update(token)
        .digest('hex');

    const user = await User.findOne({
        passwordResetToken: hashedToken,
        passwordResetExpires: { $gt: Date.now() }
    });

    if(!user)
    throw new ApiError(400, 'Invalid or expired password reset token');

    user.password = password;
    user.passwordResetToken = undefined;
    user.passwordResetExpires = undefined;

    await user.save();

    const tokens = generateTokens(user);

    return res.status(200).json(new ApiResponse(200, {
        user: {
            id: user._id,
            username: user.username,
            email: user.email,
            role: user.role,
        },
        ...tokens
    }, 'Password reset successfully'));     
});

export default {
    registerUser,
    login,
    refreshToken,
    logout,
    forgotPassword,
    resetPassword
}