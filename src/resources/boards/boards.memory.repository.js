const { BOARDS_DB } = require('../../common/localDb');
const deleteBoardsTask = require('../filters/deleteBoard');

const getAllBoards = async () => BOARDS_DB;

const getBoardById = async (id) => BOARDS_DB.find((el) => id === el.id);

const createBoard = async (board) => {
  BOARDS_DB.push(board);
  return getBoardById(board.id);
};

const changeBoard = async (board, id) => {
  const currentBoard = BOARDS_DB.find((el) => id === el.id);
  return Object.assign(currentBoard, board);
};

const deleteBoard = async (id) => {
  deleteBoardsTask(id);
  const boardIndex = BOARDS_DB.findIndex((el) => id === el.id);
  BOARDS_DB.splice(boardIndex, 1);
  return BOARDS_DB;
};

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
