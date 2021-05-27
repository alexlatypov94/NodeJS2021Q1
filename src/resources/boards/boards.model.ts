import { IBoard } from '../../interfaces';

export {};
const uuid = require('uuid');
/**
 * @typedef {Object} BoardObj - Board
 * @property {string} id - The board's id
 * @property {string} title - The board's title
 * @property {Array} columns - The board's columns
 */

/** Class Boards */
class Board {
  /**
   * @param {string} id - The board's id
   * @param {string} title - The board's title
   * @param {Array} columns - The board's columns
   */
  constructor({ id = uuid.v1(), title = 'Board1', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  /**
   *
   * @param {Object} board - get the board object
   * @returns {Object} new board
   */

  static toResponse(boards: IBoard) {
    const { id, title, columns } = boards;
    return { id, title, columns };
  }
}

module.exports = Board;
