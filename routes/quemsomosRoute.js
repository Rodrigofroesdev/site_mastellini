import quemsomosController from "../controllers/quemsomosController.js";
import express from 'express';
const router = express.Router();

const controller = new quemsomosController();

router.get('/', controller.quemsomosView);

export default router;

