import express from 'express'
import authController from '../controllers/auth.controller.js'
import { loginRateLimiter } from '../middlewares/authMiddleware.js'

const router = express.Router(); 

router.post('/register', authController.register);
router.post('/login', loginRateLimiter, authController.login);
router.post('/refresh-token', authController.refreshToken);
router.post('/logout', authController.logout);
router.post('/forgot-password', authController.forgotPassword);
router.post('/reset-password', authController.resetPassword);

export default router;