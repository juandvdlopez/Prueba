import {Router} from 'express';
import userRouter from './user.router.js';
import eventRouter from './event.router.js';


const router = Router();

router.use('/api/user', userRouter);
router.use('/api/event', eventRouter);

export default router 