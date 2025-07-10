import { Router } from 'express';
import { createPet } from '../controllers/petController';
import { protect } from '../middlewares/authMiddleware';
const router = Router();
router.post('/', protect, createPet);
export default router;