import faleconoscoController from "../controllers/faleconosco.js";
import express from 'express';
const router = express.Router();

const controller = new faleconoscoController();

router.get('/', controller.faleconoscoView);
router.post('/', controller.faleconosco);

export default router;