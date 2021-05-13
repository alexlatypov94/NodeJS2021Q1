const { BOARDS_DB } = require('../../common/localDb');

const getAllBoards = async () => BOARDS_DB;

const getBoardById = async (id) => BOARDS_DB.find((el) => id === el.id);

const createBoard = async (board) => {
  BOARDS_DB.push(board);
  return getBoardById(board.id);
};

module.exports = { getAllBoards, getBoardById, createBoard };
