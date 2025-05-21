import ColetaController from "../controllers/coletaController.js";
import express from 'express';
const router = express.Router();

const controller = new ColetaController();

router.get('/', controller.coletaView);

export default router;

