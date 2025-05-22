import trabalheconoscoController from "../controllers/trabalheconoscoController.js";
import express from 'express';
import upload from "../adapter/multer/multerAdapter.js";


const router = express.Router();

const controller = new trabalheconoscoController();

router.post('/', upload.single('iFile'), controller.trabalheconosco);

export default router;