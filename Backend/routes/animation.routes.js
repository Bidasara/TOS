import express from "express";
import {upload} from "../middlewares/multer.middleware.js";
const router = express.Router();
import animation from "../controllers/animation.controller.js";
import {checkAnimationAccess} from "../middlewares/animation.middleware.js";

router.post('/anim/upload', upload.single('animation'), animation.uploadAnimation);
router.get('/anim/:id',checkAnimationAccess,animation.getAnimationById);
router.get('/anim',animation.getAllAnimationsForUserId);

export default router;