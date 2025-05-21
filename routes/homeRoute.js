import express from 'express';
import homeController from '../controllers/homeController.js';
const router = express.Router();

const controller = new homeController();

router.get('/', controller.homeView);

export default router;

