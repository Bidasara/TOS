import express from 'express';
import dataController from '../controllers/data.controller.js';
import { requireRole } from '../middlewares/authMiddleware';

const router = express.Router();

router.get('user/getData', dataController.getAllData);
router.post('user/updateData', dataController.postData);
router.patch('user/udpateData', dataController.updateData);
router.delete('user/updateData', dataController.deleteData);
router.get('problem/:id', dataController.getProblemById);

router.get('/server/getData',requireRole('admin') ,dataController.getServerData);
router.patch('/server/updateData',requireRole('admin'), dataController.updateServerData);
router.delete('/server/updateData',requireRole('admin'), dataController.deleteServerData);

export default router;