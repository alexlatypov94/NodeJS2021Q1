/**
 * The module for Board memory functions
 * @module BoardMemoryRepo
 */

const { BOARDS_DB } = require('../../common/localDb');
const { deleteBoardsTask } = require('../utils/taskRemove');

/**
 * ## Get All boards
 * @returns {Promise<BoardObj[]>} - All boards
 */

const getAllBoards = async () => BOARDS_DB;

/**
 * ## Get user By ID
 * @param {string} id - The board's id
 * @returns {Promise<BoardObj>} - Found board
 */

const getBoardById = async (id) => BOARDS_DB.find((el) => id === el.id);

/**
 * ## Create new Board
 * @param {Object} Board - This board
 * @returns {Promise<BoardObj>} - Created board
 */

const createBoard = async (board) => {
  BOARDS_DB.push(board);
  return getBoardById(board.id);
};

/**
 * ## Change Board
 * @param {Object} Board - This board
 * @param {string} id - The board's id
 * @returns {Promise<BoardObj>} - Changed board
 */

const changeBoard = async (board, id) => {
  const currentBoard = BOARDS_DB.find((el) => id === el.id);
  return Object.assign(currentBoard, board);
};

/**
 * ## Remove Board
 * @param {string} id - The board's id
 * @returns {Promise<BoardObj[]>} - New BD without deleted board
 */

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
