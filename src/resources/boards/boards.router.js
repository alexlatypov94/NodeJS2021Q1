const router = require('express').Router();
const Boards = require('./boards.model');
const boardsService = require('./boards.service');

router.route('/').get(async (req, res) => {
  const boards = await boardsService.getAllBoards();
  res.json(boards.map(Boards.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const board = await boardsService.getBoardById(req.params.id);
  res.json(Boards.toResponse(board));
});

router.route('/').post(async (req, res) => {
  const newBoard = new Boards({
    title: req.body.title,
    columns: req.body.columns,
  });
  await boardsService.createBoard(newBoard);
  res.json(Boards.toResponse(newBoard));
});

router.route('/:id').put(async (req, res) => {
  
});

module.exports = router;
