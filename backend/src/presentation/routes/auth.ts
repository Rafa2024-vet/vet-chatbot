import { Router } from 'express';
import { registerUser, loginUser } from '../controllers/authController';

const router = Router();

// Rota para registrar um novo usuário
router.post('/register', registerUser);

// Rota para fazer login
router.post('/login', loginUser);

export default router;