import { Router } from 'express';
import { handleChatMessage } from '../controllers/chatController';
import { protect } from '../middlewares/authMiddleware'; // Importando nosso middleware de proteção

const router = Router();

// A mágica acontece aqui: `protect` é executado antes de `handleChatMessage`.
// Se o usuário não estiver logado (token inválido), `protect` retornará um erro 401
// e a requisição nunca chegará ao `handleChatMessage`.
router.post('/', protect, handleChatMessage);

export default router;