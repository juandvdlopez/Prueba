import {Router} from 'express';
import eventController from '../controllers/event.controller.js';

const router = Router();

router.post('/create', eventController.createEvent);

export default router;
