import { Animation } from '../models/animation.model.js';
import { uploadOnCloudinary } from '../utils/cloudinary.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/apiError.js';
import { Purchase } from '../models/purchase.model.js';
import { User } from '../models/user.model.js';

const uploadAnimation = asyncHandler(async (req, res) => {
    const IdlePath = await req.files[pack][0].path;
    const AttackPath = await req.files[pack][1].path;
    const BreakPath = await req.files[pack][2].path;

    if (!IdlePath || !AttackPath || !BreakPath) {
        throw new ApiError(400, 'All animation files are required');
    }

    const idle = await uploadOnCloudinary(IdlePath);
    if (!idle)
        throw new ApiError(500, 'Error uploading idle animation to Cloudinary');
    const attack = await uploadOnCloudinary(AttackPath);
    if (!attack)
        throw new ApiError(500, 'Error uploading attack animation to Cloudinary');
    const breaks = await uploadOnCloudinary(BreakPath);
    if (!breaks)
        throw new ApiError(500, 'Error uploading break animation to Cloudinary');

    const newAnimation = await Animation.create({
        title: req.body.title || 'Untitled Animation',
        pack: {
            idle: idle.secure_url,
            attack: attack.secure_url,
            break: breaks.secure_url
        },
        price: req.body.price || 0
    })
    if (!newAnimation)
        throw new ApiError(500, 'Error creating animation');
    return res.status(201).json(new ApiResponse(200, newAnimation, 'Animation uploaded successfully'));
})

const getAllAnimations = asyncHandler(async (req, res) => {
    const animations = await Animation.find().select('-createdAt -updatedAt');
    if (!animations || animations.length === 0) {
        throw new ApiError(404, 'No animations found');
    }
    return res.status(200).json(new ApiResponse(200, animations, 'Animations retrieved successfully'));
})

const getAllAnimationPacksForUserId = asyncHandler(async (req, res) => {
    const userId = req.user.id;

    if (!userId) throw new ApiError(400, 'User not logged in');

    const currentDate = new Date();

    const activePurchases = await Purchase.find({
        user: userId,
        trialEnd: { $gt: currentDate }
    })
    .select('animation')
    .lean();

    if (!activePurchases || activePurchases.length === 0) {
        return res.status(205).json(new ApiResponse(205,[],'No user purchases'));
    }

    const animationIds = activePurchases.map(purchase => purchase.animation);

    const animations = await Animation.find({ _id: { $in: animationIds } }).select('-createdAt -updatedAt');

    return res.status(200).json(new ApiResponse(200, animations, 'Animations retrieved successfully'));
})

const purchaseAnimation = asyncHandler(async (req, res) => {
    const { userId, animationId } = req.body;
    if (!userId || !animationId) {
        throw new ApiError(400, 'User ID and Animation ID are required');
    }

    const animation = await Animation.findById(animationId);
    if (!animation) {
        throw new ApiError(404, 'Animation not found');
    }

    const user = await User.findById(userId);
    if (!user) {
        throw new ApiError(404, 'User not found');
    }
    try {
        const purchase = await Purchase.create({
            user: userId,
            animation: animationId,
            trialEnd: req.body.trialEnd || new Date(Date.now() + 30 * 24 * 60 * 60 * 1000)
        })
    } catch (err) {
        throw new ApiError(500, 'Error creating purchase record');
    }
    return res.status(201).json(new ApiResponse(200, null, 'Animation purchased successfully'));
})

export default {
    uploadAnimation,
    getAllAnimations,
    purchaseAnimation,
    getAllAnimationPacksForUserId
}