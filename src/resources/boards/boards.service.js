const boardMemory = require('./boards.memory.repository');

const getAllBoards = () => boardMemory.getAllBoards();
const getBoardById = (id) => boardMemory.getBoardById(id);
const createBoard = (board) => boardMemory.createBoard(board);
const changeBoard = (board, id) => boardMemory.changeBoard(board, id);
const deleteBoard = (id) => boardMemory.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
