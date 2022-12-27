import express from 'express';
import ApiEventController from '../controllers/api/apiEventController.js';
const router = express.Router();

router.get('/event', ApiEventController.getAllEvent)

export default router