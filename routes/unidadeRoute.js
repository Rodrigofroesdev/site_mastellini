import unidadeController from "../controllers/unidadeController.js";
import express from 'express';
const router = express.Router();

const controller = new unidadeController();

router.get('/', controller.unidadeView);

export default router;

