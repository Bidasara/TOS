import User from '../models/user.model.js'
import { generateTokens, verifyRefreshToken } from '../utils/jwtUtils.js'
import crypto from 'crypto'

export const register = async (req,res) =>{
    try{
        console.log('Register request received:', req.body);
        const { username, email, password }= req.body;

        const existingUser = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        });

        if(existingUser){
            console.log('User already exists:', existingUser);
            return res.status(400).json({
                success: false,
                message: 'Username or email already exists'
            });
        }

        console.log('Creating new user...');
        const user = await User.create({
            username,
            email,
            password
        });
        console.log('User created successfully:', user);

        const tokens = generateTokens(user);

        return res.status(201).json({
            success: true,
            message: 'User registered successfully',
            data: {
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                },
                ...tokens
            }
        });
    } catch (error) {
        console.error('Error in register:', error);
        return res.status(500).json({
            success: false,
            message: 'Error registering user',
            error: error.message
        });
    }
};

export const login = async (req,res) =>{
    try{
        const {username, email, password} = req.body;

        if(!username && !email){
            return res.status(400).json({
                success: false,
                message: 'Username or email is required'
            });
        }

        if(!password){
            return res.status(400).json({
                success: false,
                message: 'Password is required'
            });
        }

        // Find user by username or email
        const user = await User.findOne({
            $or: [
                { username: username },
                { email: email }
            ]
        }).select('+password');

        if(!user){
            return res.status(401).json({
                success: false,
                message: 'Invalid username/email or password'
            });
        }

        if(!user.isActive){
            return res.status(403).json({
                success: false,
                message: 'Account is inactive'
            });
        }

        const isPasswordValid = await user.comparePassword(password);

        const isLocked = await user.registerLoginAttempt(isPasswordValid);

        if(isLocked){
            const timeLeft = Math.ceil((user.accountLockedUntil - Date.now()) / 1000 / 60);
            return res.status(429).json({
                success: false,
                message: `Account is locked. Try again in ${timeLeft} minutes`
            });
        }

        if(!isPasswordValid){
            return res.status(401).json({
                success: false,
                message: 'Invalid username/email or password'
            });
        }

        const tokens = generateTokens(user);

        return res.status(200).json({
            success: true,
            message: 'User logged in successfully',
            data: {
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                },
                ...tokens
            }
        });
    } catch(error) {
        return res.status(500).json({
            success: false,
            message: 'Error logging in user',
            error: error.message
        });
    }
}

export const refreshToken = async (req,res) =>{
    try{
        const {refreshToken} = req.body;

        if(!refreshToken){
            return res.status(400).json({
                success: false,
                message: 'Refresh token is required'
            });
        }

        const decoded = verifyRefreshToken(refreshToken);

        const user = await User.findById(decoded.id);

        if(!user || !user.isActive){
            return res.status(403).json({
                success: false,
                message: 'Invalid refresh token'
            });
        }

        const tokens = generateTokens(user);

        return res.status(200).json({
            success: true,
            message: 'Tokens refreshed successfully',
            data: tokens
        });
    } catch(error){
        return res.status(401).json({
            success: false,
            message: 'Error refreshing tokens',
            error: error.message
        });
    }
}

export const logout = async (req,res) =>{
    return res.status(200).json({
        success: true,
        message: 'User logged out successfully'
    })
}

export const forgotPassword = async (req,res) =>{
    try{
        const { email } = req.body;

        if(!email){
            return res.status(400).json({
                success: false,
                message: 'Email is required'
            });
        }

        const user = await User.findOne({ email });

        if(!user){
            return res.status(200).json({
                success: true,
                message: 'If your email is registered, you will receive a password reset link'
            });
        }
        
        const resetToken = crypto.randomBytes(32).toString('hex');

        user.passwordResetToken = crypto
            .createHash('sha256')
            .update(resetToken)
            .digest('hex');

        user.passwordResetExpires = Date.now() + 10 * 60 * 1000; // 10 minutes

        await user.save({validateBeforeSave: false});



        // Send email with reset token (not implemented here)

        return res.status(200).json({
            success: true,
            message: 'Password reset token sent to email',
            resetToken
        });
    } catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error sending password reset token',
            error: error.message
        });
    }
};

export const resetPassword = async (req,res) =>{
    try {
        const { token, password } = req.body;

        if(!token || !password){
            return res.status(400).json({
                success: false,
                message: 'Token and password are required'
            });
        }

        const hashedToken = crypto
            .createHash('sha256')
            .update(token)
            .digest('hex');

        const user = await User.findOne({
            passwordResetToken: hashedToken,
            passwordResetExpires: { $gt: Date.now() }
        });

        if(!user){
            return res.status(400).json({
                success: false,
                message: 'Invalid or expired token'
            });
        }

        user.password = password;
        user.passwordResetToken = undefined;
        user.passwordResetExpires = undefined;

        await user.save();

        const tokens = generateTokens(user);

        return res.status(200).json({
            success: true,
            message: 'Password reset successfully',
            data: {
                user: {
                    id: user._id,
                    username: user.username,
                    email: user.email,
                    role: user.role,
                },
                ...tokens
            }
        });
    } catch(error){
        return res.status(500).json({
            success: false,
            message: 'Error resetting password',
            error: error.message
        });
    }
}

export default {
    register,
    login,
    refreshToken,
    logout,
    forgotPassword,
    resetPassword
};