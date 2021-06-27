import express, { Request, Response } from 'express';
import { boardsService } from './boards.service';

export const router = express.Router();

router.route('/').get(async (_req: Request, res: Response) => {
  const boards = await boardsService.getAllBoards();
  res.status(200).json(boards);
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const board = await boardsService.getBoardById(
    req.params['boardId'] as string
  );
  if (!board) {
    res.status(404).json();
  } else {
    res.status(200).json(board);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const newBoard = req.body;
  const board = await boardsService.createBoard(newBoard);
  res.status(201).json(board);
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const currentBoard = await boardsService.changeBoard(
    req.body,
    req.params['boardId'] as string
  );
  res.status(200).json(currentBoard);
});

router.route('/:boardId').delete(async (req: Request, res: Response) => {
  const updateBoards = await boardsService.deleteBoard(
    req.params['boardId'] as string
  );
  res.status(204).json(updateBoards);
});
