// backend/src/server.ts

import express, { Request, Response } from 'express';
import cors from 'cors';
import dotenv from 'dotenv';

// Importando todas as nossas rotas refatoradas
import authRoutes from './presentation/routes/auth';
import chatRoutes from './presentation/routes/chat';
import petRoutes from './presentation/routes/petRoutes'; // <-- NOVA ADIÇÃO

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middlewares essenciais
app.use(cors());
app.use(express.json()); // Habilita o parsing de JSON no corpo das requisições

// Rota de teste para verificar se o servidor está no ar
app.get('/', (req: Request, res: Response) => {
  res.send('Servidor Vet-Chatbot no ar e rodando com TypeScript! 🚀');
});

// ================== ROTAS DA API ==================
app.use('/api/auth', authRoutes); // Endpoints de registro e login
app.use('/api/chat', chatRoutes); // Endpoint do chat, protegido
app.use('/api/pets', petRoutes);  // <-- NOVA ADIÇÃO: Endpoint para pets, protegido


// Inicia o servidor
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend rodando na porta ${PORT}`);
});