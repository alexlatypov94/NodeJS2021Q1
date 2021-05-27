const uuid = require('uuid');
/**
 * @typedef {Object} TaskObj - User
 * @property {string} id - The task's id
 * @property {string} title - The tasks's title
 * @property {number} order - The user's order
 * @property {string} description - The user's description
 * @property {string} userId - The user's userId
 * @property {string} boardId - The user's boardId
 * @property {string} columnId - The user's columnId
 */

/** Class Task */
class Task {
  /**
   * @param {string} id - The task's id
   * @param {string} title - The tasks's title
   * @param {number} order - The user's order
   * @param {string} description - The user's description
   * @param {string} userId - The user's userId
   * @param {string} boardId - The user's boardId
   * @param {string} columnId - The user's columnId
   */
  constructor({
    id = uuid.v1(),
    title = 'task1',
    order = 0,
    description = 'task description',
    userId = uuid.v1(),
    boardId = uuid.v1(),
    columnId = uuid.v1(),
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  /**
   *
   * @param {Object} task - The task object
   * @returns {Object} task
   */

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
