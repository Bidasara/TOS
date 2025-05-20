import User from '../models/user.model.js';

export const getCurrentUser = async (req, res) => {
  try {
    const userId = req.user.id;

    const user = await User.findById(userId).select('-password');

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
      message: 'Error fetching user profile',
      error: error.message
    });
  }
};

export const updateCurrentUser = async (req, res) => {
  try {
    const userId = req.user.id;
    const { username, email } = req.body;

    // Check if username or email is already taken
    if (username || email) {
      const existingUser = await User.findOne({
        $and: [
          { _id: { $ne: userId } },
          { $or: [
            { username: username },
            { email: email }
          ]}
        ]
      });

      if (existingUser) {
        return res.status(409).json({
          success: false,
          message: 'Username or email already in use'
        });
      }
    }

    // Find and update user
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: req.body },
      { new: true, runValidators: true }
    ).select('-password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    return res.status(200).json({
      success: true,
      message: 'Profile updated successfully',
      data: {
        user
      }
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error updating profile',
      error: error.message
    });
  }
};

export const changePassword = async (req, res) => {
  try {
    const userId = req.user.id;
    const { currentPassword, newPassword } = req.body;

    // Validate input
    if (!currentPassword || !newPassword) {
      return res.status(400).json({
        success: false,
        message: 'Current password and new password are required'
      });
    }

    // Find user with password
    const user = await User.findById(userId).select('+password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if current password is correct
    const isPasswordValid = await user.comparePassword(currentPassword);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Current password is incorrect'
      });
    }

    // Update password
    user.password = newPassword;
    await user.save();

    return res.status(200).json({
      success: true,
      message: 'Password changed successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error changing password',
      error: error.message
    });
  }
};

export const deleteAccount = async (req, res) => {
  try {
    const userId = req.user.id;
    const { password } = req.body;

    // Validate input
    if (!password) {
      return res.status(400).json({
        success: false,
        message: 'Password is required to delete account'
      });
    }

    // Find user with password
    const user = await User.findById(userId).select('+password');

    if (!user) {
      return res.status(404).json({
        success: false,
        message: 'User not found'
      });
    }

    // Check if password is correct
    const isPasswordValid = await user.comparePassword(password);

    if (!isPasswordValid) {
      return res.status(401).json({
        success: false,
        message: 'Password is incorrect'
      });
    }

    // Delete user
    await User.findByIdAndDelete(userId);

    return res.status(200).json({
      success: true,
      message: 'Account deleted successfully'
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: 'Error deleting account',
      error: error.message
    });
  }
};

export const getAllUsers = async (req, res) => {
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

export const getUserById = async (req, res) => {
  try {
    const userId = req.params.id;

    const user = await User.findById(userId).select('-password');

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

export const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const updates = req.body;

    // Find and update user
    const user = await User.findByIdAndUpdate(
      userId,
      { $set: updates },
      { new: true, runValidators: true }
    ).select('-password');

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

export const deleteUser = async (req, res) => {
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

export default {
  getCurrentUser,
  updateCurrentUser,
  changePassword,
  deleteAccount,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
};