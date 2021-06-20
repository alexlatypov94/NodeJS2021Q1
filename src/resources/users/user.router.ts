import express, { Request, Response } from 'express';
import { User } from '../../entities/user.model';
import { IUser } from '../../interfaces';
import { usersService } from './user.service';

export const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const users = await usersService.getAllUsers();
  res.status(200).json(users.map(User.toResponse));
});

router.route('/:userId').get(async (req: Request, res: Response) => {
  const user = await usersService.getUserById(req.params['userId'] as string);
  res.status(200).json(User.toResponse(user as IUser));
});

router.route('/').post(async (req: Request, res: Response) => {
  const newUser = req.body;
  const user = await usersService.createUser(newUser);
  res.status(201).json(User.toResponse(user));
});

router.route('/:userId').put(async (req: Request, res: Response) => {
  const currentUser = await usersService.changeUser(
    req.body,
    req.params['userId'] as string
  );
  res.status(200).json(User.toResponse(currentUser as IUser));
});

router.route('/:userId').delete(
  async (req: Request, res: Response): Promise<void> => {
    const users = await usersService.deleteUser(req.params['userId'] as string);
    res.status(204).json(users.map(User.toResponse));
  }
);
