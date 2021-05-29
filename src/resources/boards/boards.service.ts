/**
 * Module for all Board services functions
 * @module BoardServices
 */

import { IBoard } from './../../interfaces/interfaceDB';
const boardMemory = require('./boards.memory.repository');

/**
 * ### Board service
 * @returns {Promise<BoardObj>} - all boards
 */

const getAllBoards = (): Promise<Array<IBoard>> => boardMemory.getAllBoards();

/**
 * ### Board service
 * @param {string} id - the board's id
 * @returns {Promise<BoardObj>} - the board with current id
 */

const getBoardById = (id: string): Promise<IBoard> => boardMemory.getBoardById(id);

/**
 * ### Board service
 * @param {Object} board - the board
 * @returns {Promise<BoardObj>} - new Board
 */

const createBoard = (board: IBoard): Promise<IBoard> => boardMemory.createBoard(board);

/**
 * ### Board service
 * @param {Object} board - the board
 * @param {string} id - the board's id
 * @returns {Promise<BoardObj>} - the changed board
 */

const changeBoard = (board: IBoard, id: string): Promise<IBoard> =>
  boardMemory.changeBoard(board, id);

/**
 * ### Board service
 * @param {string} id - the board's id
 * @returns {Promise<BoardObj[]>} - all boards without deleted board
 */

const deleteBoard = (id: string): Promise<Array<IBoard>> => boardMemory.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
