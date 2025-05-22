import parceiroController from "../controllers/parceiroController.js";
import express from 'express';

const parceiroControllerInstance = new parceiroController();
const router = express.Router();

router.get('/', parceiroControllerInstance.parceiroView);

export default router;

