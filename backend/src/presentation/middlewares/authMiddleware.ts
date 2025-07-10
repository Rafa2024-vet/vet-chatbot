import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import { prisma } from '../../infrastructure/database/prisma';

// Uma interface customizada para o nosso objeto Request,
// informando ao TypeScript que ele PODE ter uma propriedade 'user'.
export interface AuthRequest extends Request {
  user?: {
    id: string;
    name: string;
    email: string;
  };
}

// Interface para o payload que esperamos do JWT
interface JwtPayload {
  id: string;
}

export const protect = async (req: AuthRequest, res: Response, next: NextFunction) => {
  let token;

  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    try {
      // 1. Obter o token do cabeçalho "Bearer <token>"
      token = req.headers.authorization.split(' ')[1];

      // 2. Verificar e decodificar o token usando nosso segredo
      const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;

      // 3. Usar o 'id' do token para buscar o usuário no banco de dados com Prisma
      //    Selecionamos apenas os campos que queremos, excluindo a senha.
      req.user = await prisma.user.findUnique({
        where: { id: decoded.id },
        select: {
          id: true,
          name: true,
          email: true,
          createdAt: true,
        },
      });

      // Se o usuário não for encontrado (ex: token válido, mas usuário deletado)
      if (!req.user) {
        return res.status(401).json({ message: 'Not authorized, user not found' });
      }

      // 4. Se tudo deu certo, chama o próximo passo da requisição (a função do controlador)
      next();
    } catch (error) {
      console.error(error);
      return res.status(401).json({ message: 'Not authorized, token failed' });
    }
  }

  if (!token) {
    res.status(401).json({ message: 'Not authorized, no token' });
  }
};