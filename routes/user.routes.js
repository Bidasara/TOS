import express from 'express';
import userController from '../controllers/user.controller.js';
import { authenticateJWT, requireRole } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.use(authenticateJWT);

router.get('/profile', userController.getCurrentUser);
router.patch('/profile', userController.updateCurrentUser);
router.post('/change-password', userController.changePassword);
router.delete('/account', userController.deleteAccount);

router.get('/', requireRole('admin'), userController.getAllUsers);
router.get('/:id', requireRole('admin'), userController.getUserById);
router.patch('/:id', requireRole('admin'), userController.updateUser);
router.delete('/:id', requireRole('admin'), userController.deleteUser);

export default router;