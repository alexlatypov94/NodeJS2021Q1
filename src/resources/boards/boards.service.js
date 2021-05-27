/**
 * Module for all Board services functions
 * @module BoardServices
 */

const boardMemory = require('./boards.memory.repository');

/**
 * ### Board service
 * @returns {Promise<BoardObj>} - all boards
 */

const getAllBoards = () => boardMemory.getAllBoards();

/**
 * ### Board service
 * @param {string} id - the board's id
 * @returns {Promise<BoardObj>} - the board with current id
 */

const getBoardById = (id) => boardMemory.getBoardById(id);

/**
 * ### Board service
 * @param {Object} board - the board
 * @returns {Promise<BoardObj>} - new Board
 */

const createBoard = (board) => boardMemory.createBoard(board);

/**
 * ### Board service
 * @param {Object} board - the board
 * @param {string} id - the board's id
 * @returns {Promise<BoardObj>} - the changed board
 */

const changeBoard = (board, id) => boardMemory.changeBoard(board, id);

/**
 * ### Board service
 * @param {string} id - the board's id
 * @returns {Promise<BoardObj[]>} - all boards without deleted board
 */

const deleteBoard = (id) => boardMemory.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
