/**
 * The module for Board memory functions
 * @module BoardMemoryRepo
 */

 export {};
 import { IBoard } from '../../interfaces';
const { BOARDS_DB } = require('../../common/localDb');
const { deleteBoardsTask } = require('../utils/taskRemove');

/**
 * ## Get All boards
 * @returns {Promise<BoardObj[]>} - All boards
 */

const getAllBoards = async (): Promise<Array<IBoard>> => BOARDS_DB;

/**
 * ## Get user By ID
 * @param {string} id - The board's id
 * @returns {Promise<BoardObj>} - Found board
 */

const getBoardById = async (id: string): Promise<IBoard> =>
  BOARDS_DB.find((el: IBoard) => id === el.id);

/**
 * ## Create new Board
 * @param {Object} Board - This board
 * @returns {Promise<BoardObj>} - Created board
 */

const createBoard = async (board: IBoard): Promise<IBoard> => {
  BOARDS_DB.push(board);
  return getBoardById(board.id);
};

/**
 * ## Change Board
 * @param {Object} Board - This board
 * @param {string} id - The board's id
 * @returns {Promise<BoardObj>} - Changed board
 */

const changeBoard = async (board: IBoard, id: string): Promise<IBoard> => {
  const currentBoard = BOARDS_DB.find((el: IBoard) => id === el.id);
  return Object.assign(currentBoard, board);
};

/**
 * ## Remove Board
 * @param {string} id - The board's id
 * @returns {Promise<BoardObj[]>} - New BD without deleted board
 */

const deleteBoard = async (id: string): Promise<Array<IBoard>> => {
  deleteBoardsTask(id);
  const boardIndex: number = BOARDS_DB.findIndex((el: IBoard) => id === el.id);
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
