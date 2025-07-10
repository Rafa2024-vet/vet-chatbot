import { Response } from 'express';
import { AuthRequest } from '../middlewares/authMiddleware';
import { prisma } from '../../infrastructure/database/prisma';

export const createPet = async (req: AuthRequest, res: Response) => {
    const { name, species, breed, birthDate } = req.body;
    const ownerId = req.user!.id;
    const pet = await prisma.pet.create({
        data: { name, species, breed, birthDate: new Date(birthDate), ownerId }
    });
    res.status(201).json(pet);
};