const router = require('express').Router();
const Board = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.status(200).json(boards.map(Board.toResponse));
});

router.route('/:boardId').get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.boardId);
  if (!board) {
    res.status(404).json();
  } else {
    res.status(200).json(Board.toResponse(board));
  }
});

router.route('/').post(async (req, res) => {
  const newBoard = new Board({
    title: req.body.title,
    columns: req.body.columns,
  });
  const board = await boardsService.createBoard(newBoard);
  res.status(201).json(Board.toResponse(board));
});

router.route('/:boardId').put(async (req, res) => {
  const currentBoard = await boardsService.changeBoard(
    req.body,
    req.params.boardId
  );
  res.status(200).json(Board.toResponse(currentBoard));
});

router.route('/:boardId').delete(async (req, res) => {
  const updateBoards = await boardsService.deleteBoard(req.params.boardId);
  res.status(204).json(updateBoards.map(Board.toResponse));
});

module.exports = router;
