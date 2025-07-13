import { Animation } from '../models/animation.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import { Purchase } from '../models/purchase.model.js';

const uploadAnimation  = asyncHandler(async (req,res)=> {
    const animationLocalPath = await req.file?.path;

    if(!animationLocalPath)
    throw new ApiError(400, 'Animation file is required');

    const animation = await uploadOnCloudinary(animationLocalPath);

    if(!animation)
    throw new ApiError(500, 'Error uploading animation to Cloudinary');

    const newAnimation = await Animation.create({
        title: req.file?.originalname || 'Untitled Animation',
        link: animation.url
    })
    if(!newAnimation)
    throw new ApiError(500, 'Error creating animation');
    return res.status(201).json(new ApiResponse(200, newAnimation, 'Animation uploaded successfully'));
})

const getAllAnimationsForUserId = asyncHandler(async (req,res)=>{
    const userId = req.user.id;

    if(!userId) throw new ApiError(400, 'User not logged in');

    const animationIds = Purchase.find({ user: userId}).select('-user -_id -createdAt -updatedAt');

    if(!animationIds || animationIds.length === 0) {
        throw new ApiError(404, 'No animations found for this user');
    }

    const animations = await Animation.find({ _id: { $in: animationIds } }).select('-createdAt -updatedAt');
    if(!animations || animations.length === 0) {
        throw new ApiError(404, 'No animations found of this animation IDs');
    }

    return res.status(200).json(new ApiResponse(200, animations, 'Animations retrieved successfully'));
})

const getAnimationById = asyncHandler(async (req, res) => {
    const animationId = req.params.id;
    if(!animationId) throw new ApiError(400, 'Animation ID is required');

    const animation = await Animation.findById(animationId);
    if(!animation) throw new ApiError(404, 'Animation not found');
    return res.status(200).json(new ApiResponse(200, animation, 'Animation retrieved successfully'));
})

const purchaseAnimation = asyncHandler(async (req,res) => {
    const {userId, animationId} = req.body;
    if(!userId || !animationId) {
        throw new ApiError(400, 'User ID and Animation ID are required');
    }

    const animation = await Animation.findById(animationId);
    if(!animation) {
        throw new ApiError(404, 'Animation not found');
    }

    const user = await User.findById(userId);
    if(!user) {
        throw new ApiError(404, 'User not found');
    }
    if(user.animations.includes(animationId)) {
        return res.status(200).json(new ApiResponse(200, null, 'User already has access to this animation'));
    } else {
        user.animation.push(animationId);
        await user.save();
        return res.status(200).json(new ApiResponse(200, null, 'User granted access to animation successfully'));
    }
})

export default {
    uploadAnimation,
    getAnimationById,
    purchaseAnimation,
    getAllAnimationsForUserId
}