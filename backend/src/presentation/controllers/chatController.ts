import { Response } from 'express';
import Groq from 'groq-sdk';
import { prisma } from '../../infrastructure/database/prisma';
import { AuthRequest } from '../middlewares/authMiddleware'; // Importando nosso Request customizado

const groq = new Groq({
  apiKey: process.env.GROQ_API_KEY,
});

/**
 * @desc    Lidar com mensagens do chat, obter resposta da IA e salvar no banco
 * @route   POST /api/chat
 * @access  Protected
 */
export const handleChatMessage = async (req: AuthRequest, res: Response) => {
  const { message, petId } = req.body;
  const userId = req.user?.id; // Obtemos o ID do usuário logado através do middleware 'protect'

  if (!message || !petId || !userId) {
    return res.status(400).json({ error: 'Message, petId, and userId are required.' });
  }

  try {
    // 1. Encontrar um evento de saúde aberto para este pet ou criar um novo.
    let healthEvent = await prisma.healthEvent.findFirst({
      where: {
        petId: petId,
        status: 'OPEN',
      },
    });

    if (!healthEvent) {
      healthEvent = await prisma.healthEvent.create({
        data: {
          petId: petId,
          // Outros campos podem ter valores padrão definidos no schema
        },
      });
    }

    // 2. Salvar a mensagem do usuário no banco, associada ao evento de saúde
    await prisma.message.create({
      data: {
        content: message,
        sender: 'USER', // Usando o enum do nosso schema
        eventId: healthEvent.id,
      },
    });

    // 3. Chamar a API da Groq para obter a resposta da IA
    const systemPrompt = "Você é o VetChatBot, um assistente veterinário. Suas respostas não substituem uma consulta veterinária. Responda em português brasileiro.";
    
    const chatCompletion = await groq.chat.completions.create({
      messages: [
        { role: 'system', content: systemPrompt },
        { role: 'user', content: message },
      ],
      model: 'llama3-8b-8192',
    });

    const botResponse = chatCompletion.choices[0]?.message?.content || 'Desculpe, não consegui gerar uma resposta.';

    // 4. Salvar a resposta do bot no banco
    await prisma.message.create({
      data: {
        content: botResponse,
        sender: 'CLINICO_GERAL', // Usando o enum do nosso schema
        eventId: healthEvent.id,
      },
    });

    // 5. Enviar a resposta para o frontend
    res.json({ reply: botResponse });

  } catch (error) {
    console.error('Error handling chat message:', error);
    res.status(500).json({ error: 'Failed to process chat message.' });
  }
};