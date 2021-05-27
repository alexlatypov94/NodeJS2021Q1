/**
 * The module for remove tasks functions
 * @module Utils
 */

const taskRepo = require('../../common/localDb');
const { TASKS } = require('../../common/localDb');

/**
 * ### Function for removed board
 * @param {string} id - the board's id
 * @returns {Promise<TaskObj[]>}
 */

const deleteBoardsTask = async (id) => {
  const newTasks = TASKS.map((el, index) => {
    if (id === el.boardId) {
      return index;
    }
    return el;
  }).filter((el) => typeof el === 'number');
  newTasks.forEach((el, index) => {
    TASKS.splice(el - index, 1);
  });
  return taskRepo.TASKS;
};

/**
 * ### Function for removed user
 * @param {string} id - the user's id
 */

const updateUser = async (id) => {
  taskRepo.TASKS.forEach((el) => {
    if (el.userId === id) {
      const newObj = { ...el, userId: null };
      Object.assign(el, newObj);
    }
  });
};

module.exports = { deleteBoardsTask, updateUser };
