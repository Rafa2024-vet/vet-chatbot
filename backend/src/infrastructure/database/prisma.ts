// backend/src/infrastructure/database/prisma.ts

import { PrismaClient } from '@prisma/client';

// Cria uma única instância do PrismaClient para ser usada em toda a aplicação.
// Isso evita criar múltiplas conexões com o banco de dados.
export const prisma = new PrismaClient();