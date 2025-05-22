import convenioController from "../controllers/convenioController.js";
import express from 'express';
const router = express.Router();

const controller = new convenioController();

router.get('/', controller.convenioView);

export default router;

