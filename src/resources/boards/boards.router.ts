import { Request, Response } from 'express';
import { IBoard } from '../../interfaces';
const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (_req: Request, res: Response) => {
  const boards: Array<IBoard> = await boardsService.getAllBoards();
  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req: Request, res: Response) => {
  const board: IBoard = await boardsService.getBoardById(req.params['boardId']);
  if (!board) {
    res.status(404).json();
  } else {
    res.status(200).json(Board.toResponse(board));
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const newBoard: IBoard = new Board({
    title: req.body.title,
    columns: req.body.columns,
  });
  const board: IBoard = await boardsService.createBoard(newBoard);
  res.status(201).json(Board.toResponse(board));
});

router.route('/:boardId').put(async (req: Request, res: Response) => {
  const currentBoard: IBoard = await boardsService.changeBoard(
    req.body,
    req.params['boardId']
  );
  res.status(200).json(Board.toResponse(currentBoard));
});

router.route('/:boardId').delete(async (req: Request, res: Response) => {
  const updateBoards: Array<IBoard> = await boardsService.deleteBoard(req.params['boardId']);
  res.status(204).json(updateBoards.map(Board.toResponse));
});

module.exports = router;
