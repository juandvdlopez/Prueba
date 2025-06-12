import {Router} from 'express';
import {userController} from '../controllers/user.controller.js';

const router = Router();

userRouter.get('/', userController.getUsers);

export default router; 

