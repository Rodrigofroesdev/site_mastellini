import express from 'express';
import exameController from '../controllers/exameController.js';
const router = express.Router();

const controller = new exameController();

router.get('/', controller.exameView);
router.get('/:url', controller.exameUrl);

export default router;

