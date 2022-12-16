import express from 'express';
import ApiEventController from '../controllers/api/ApiEventController.js';
const router = express.Router();

router.get('/event', ApiEventController.getAllEvent)

export default router