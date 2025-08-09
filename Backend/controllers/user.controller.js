import { User } from '../models/user.model.js';
import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiResponse } from '../utils/apiResponse.js';
import { ApiError } from '../utils/apiError.js';
import { List } from '../models/list.model.js';
import { Animation } from '../models/animation.model.js';

const getUserDashboard = asyncHandler(async (req, res) => {
  const username = req.params.username || req.user.username;
  const user = await User.findOne({ username });
  if (!user) throw new ApiError(404, 'User not found');

  try {
    const stats = await List.aggregate([
      { $match: { owner: user._id } },
      { $unwind: { path: '$categories', preserveNullAndEmptyArrays: true } },
      { $unwind: { path: '$categories.problems', preserveNullAndEmptyArrays: true } },
      {
        $match: {
          $or: [
            { 'categories.problems.solved': true },
            { 'categories.problems.revised': true }
          ]
        }
      },
      {
        $group: {
          _id: '$categories.problems.problemId',
          solved: { $max: { $cond: ['$categories.problems.solved', 1, 0] } },
          revised: { $max: { $cond: ['$categories.problems.revised', 1, 0] } }
        }
      },
      {
        $lookup: {
          from: 'problems',
          localField: '_id',
          foreignField: '_id',
          as: 'problemInfo'
        }
      },
      { $unwind: '$problemInfo' },
      {
        $group: {
          _id: '$problemInfo.difficulty',
          solvedCount: { $sum: '$solved' },
          revisedCount: { $sum: '$revised' }
        }
      }
    ]);
    const userObject = user.toObject();

    delete userObject._id;
    delete userObject.createdAt;
    delete userObject.updatedAt;
    return res.status(200).json(new ApiResponse(200, { user:userObject, stats }, 'User dashboard retrieved successfully'));
  } catch (error) {
    console.error(error);
    throw new ApiError(500, 'Dashboard aggregation failed');
  }   
});

const getCart = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const user = await User.findById(userId).populate('cart');
  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  return res.status(200).json(new ApiResponse(200, user.cart, 'User cart retrieved successfully'));
});

const addToCart = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { animationId } = req.params;
  const animation = await Animation.findById(animationId);
  if (!animation) {
    throw new ApiError(404, 'Animation not found');
  }
  const user = await User.findByIdAndUpdate(
    userId,
    { $addToSet: { cart: animationId } },
    { new: true, runValidators: true }
  ).populate('cart');

  return res.status(200).json(new ApiResponse(200, user.cart, 'Animation added to cart successfully'));
});

const removeFromCart = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { animationId } = req.params;
  const animation = await Animation.findById(animationId);
  if (!animation) {
    throw new ApiError(404, 'Animation not found');
  }
  const user = await User.findByIdAndUpdate(
    userId,
    { $pull: { cart: animationId } },
    { new: true, runValidators: true }
  ).populate('cart');

  return res.status(200).json(new ApiResponse(200, user.cart, 'Animation removed from cart successfully'));
});

const updateCurrentUserProfile = asyncHandler(async (req, res) => {
  const userId = req.user.id;
  const { username } = req.body;

  if (!username)
    throw new ApiError(400, 'Username is required');

  // Check if username or email is already taken
  if (username) {
    const existingUser = await User.findOne({
      $and: [
        { _id: { $ne: userId } },
        { username: username }
      ]
    });

    if (existingUser)
      throw new ApiError(409, 'Username already exists');
  }

  // Find and update user
  const user = await User.findByIdAndUpdate(
    userId,
    { $set: req.body },
    { new: true, runValidators: true }
  ).select('-password -_id -role -email -lists -createdAt -updatedAt -lastRevised -passwordResetToken -passwordResetExpires -refreshToken');

  if (!user) {
    throw new ApiError(404, 'User not found');
  }

  return res.status(200).json(new ApiResponse(200, user, 'User profile updated successfully'));
});

const deleteAccount = asyncHandler(async (req, res) => {

  const userId = req.user.id;
  const { password } = req.body;

  // Validate input
  if (!password)
    throw new ApiError(400, 'Password is required to delete account');

  // Find user with password
  const user = await User.findById(userId).select('+password');

  if (!user)
    throw new ApiError(404, 'User not found');

  // Check if password is correct
  const isPasswordValid = await user.isPasswordCorrect(password);

  if (!isPasswordValid)
    throw new ApiError(401, 'Incorrect password');

  // Delete user
  await User.findByIdAndDelete(userId);

  return res.status(200).json(new ApiResponse(200, null, 'User account deleted successfully'));
});

const getAllUsers = async (req, res) => {
  try {
    const users = await User.find().select('-password');

    return res.status(200).json({
      success: true,
      count: users.length,
      data: {
        users
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching users',
      error: error.message
    });
  }
};

const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      data: {
        user
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error fetching user',
      error: error.message
    });
  }
};

const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    // Find and update user
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true }
    );

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User updated successfully',
      data: {
        user
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error updating user',
      error: error.message
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findByIdAndDelete(userId);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'User deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error deleting user',
      error: error.message
    });
  }
};

const getAttemptedRevisedStats = asyncHandler(async (req, res) => {
  const userId = req.user._id;

  const stats = await List.aggregate([
    { $match: { owner: userId } },
    { $unwind: '$categories' },
    { $unwind: '$categories.problems' },
    {
      $lookup: {
        from: 'problems',
        localField: 'categories.problems.problemId',
        foreignField: '_id',
        as: 'problemInfo',
      },
    },
    { $unwind: '$problemInfo' },
    {
      $group: {
        _id: '$problemInfo.difficulty',
        attempted: {
          $sum: { $cond: ['$categories.problems.solved', 1, 0] },
        },
        revised: {
          $sum: { $cond: ['$categories.problems.revised', 1, 0] },
        },
      },
    },
  ]);

  // Format result as { Easy: { attempted, revised }, ... }
  const result = { Easy: { attempted: 0, revised: 0 }, Medium: { attempted: 0, revised: 0 }, Hard: { attempted: 0, revised: 0 } };
  stats.forEach((item) => {
    if (result[item._id]) {
      result[item._id].attempted = item.attempted;
      result[item._id].revised = item.revised;
    }
  });

  res.json({ success: true, data: result });
});

export default {
  getUserDashboard,
  updateCurrentUserProfile,
  deleteAccount,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser,
  getCart,
  addToCart,
  removeFromCart,
};