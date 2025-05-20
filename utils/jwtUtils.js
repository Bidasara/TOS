import jwt from 'jsonwebtoken'
import crypto from 'crypto'

const JWT_SECRET = process.env.JWT_SECRET || crypto.randomBytes(64).toString('hex');
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN || '1d';
const JWT_REFRESH_SECRET = process.env.JWT_REFRESH_SECRET || crypto.randomBytes(64).toString('hex');
const JWT_REFRESH_EXPIRES_IN = process.env.JWT_REFRESH_EXPIRES_IN || '7d';

export const generateAccessToken = (userId,role) => {
    return jwt.sign(
        {
            id: userId,
            role: role
        },
        JWT_SECRET,
        {
            expiresIn: JWT_EXPIRES_IN
        }
    );
};

export const generateRefreshToken = (userId) => {
    return jwt.sign(
        {id: userId},
        JWT_REFRESH_SECRET,
        {
            expiresIn: JWT_REFRESH_EXPIRES_IN
        }
    );
};

export const verifyAccessToken = (token) => {
  try {
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired token');
  }
};

export const verifyRefreshToken = (token) => {
  try {
    return jwt.verify(token, JWT_REFRESH_SECRET);
  } catch (error) {
    throw new Error('Invalid or expired refresh token');
  }
};

export const extractTokenFromHeader = (authHeader) => {
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return null;
  }
  
  return authHeader.split(' ')[1];
};

export const generateTokens = (user) => {
  const accessToken = generateAccessToken(user._id, user.role);
  const refreshToken = generateRefreshToken(user._id);
  
  return {
    accessToken,
    refreshToken,
    expiresIn: JWT_EXPIRES_IN
  };
};

export default {
    generateAccessToken,
    generateRefreshToken,
    verifyAccessToken,
    verifyRefreshToken,
    extractTokenFromHeader,
    generateTokens
};