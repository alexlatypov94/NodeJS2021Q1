const router = require('express').Router();
const Boards = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.status(200).json(boards.map(Boards.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);
  if (!board) {
    return res.status(404).json();
  }
  return res.status(200).json(Boards.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const newBoard = new Boards({
    title: req.body.title,
    columns: req.body.columns,
  });
  const board = await boardsService.createBoard(newBoard);
  res.status(201).json(Boards.toResponse(board));
});

router.route('/:id').put(async (req, res) => {
  const currentBoard = await boardsService.changeBoard(req.body, req.params.id);
  res.status(200).json(Boards.toResponse(currentBoard));
});

router.route('/:id').delete(async (req, res) => {
  const updateBoards = await boardsService.deleteBoard(req.params.id);
  res.status(204).json(updateBoards.map(Boards.toResponse));
});

module.exports = router;
