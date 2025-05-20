import { verifyAccessToken, extractTokenFromHeader } from "../utils/jwtUtils.js";
import User from "../models/user.model.js";

export const authenticateJWT = async (req, res, next) => {
  try {
    // Get auth header
    const authHeader = req.headers.authorization;
    const token = extractTokenFromHeader(authHeader);
    
    if (!token) {
      return res.status(401).json({ 
        success: false, 
        message: 'Access denied. No token provided.' 
      });
    }

    // Verify token
    const decoded = verifyAccessToken(token);
    
    // Check if user still exists in database
    const user = await User.findById(decoded.id);
    if (!user || !user.isActive) {
      return res.status(401).json({ 
        success: false, 
        message: 'The user belonging to this token no longer exists.' 
      });
    }

    // Add user info to request object
    req.user = {
      id: decoded.id,
      role: decoded.role
    };
    
    next();
  } catch (error) {
    return res.status(401).json({ 
      success: false, 
      message: 'Invalid token. Please log in again.' 
    });
  }
};

export const requireRole = (...roles) => {
  return (req, res, next) => {
    // Check if user object exists (should be added by authenticateJWT)
    if (!req.user) {
      return res.status(401).json({ 
        success: false, 
        message: 'Unauthorized access.' 
      });
    }

    // Check if user has required role
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ 
        success: false, 
        message: 'Forbidden: you do not have permission to access this resource.' 
      });
    }

    next();
  };
};

export const loginRateLimiter = async (req, res, next) => {
  try {
    const { username, email } = req.body;
    
    // Find user by username or email
    const user = await User.findOne({
      $or: [
        { username: username },
        { email: email }
      ]
    }).select('+failedLoginAttempts +accountLocked +accountLockedUntil');

    // If no user found, proceed (will fail in auth controller)
    if (!user) {
      return next();
    }

    // Check if account is locked
    if (user.isAccountLocked()) {
      const timeRemaining = Math.ceil((user.accountLockedUntil - Date.now()) / 1000 / 60);
      return res.status(429).json({
        success: false,
        message: `Account temporarily locked due to multiple failed login attempts. Try again in ${timeRemaining} minutes.`
      });
    }

    // Attach user to request for the auth controller
    req.loginUser = user;
    next();
  } catch (error) {
    next(error);
  }
};

export default {
  authenticateJWT,
  requireRole,
  loginRateLimiter
};