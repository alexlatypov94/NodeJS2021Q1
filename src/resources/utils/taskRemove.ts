/**
 * The module for remove tasks functions
 * @module Utils
 */

import { ITask } from "../../interfaces";

const taskRepo = require('../../common/localDb');
const { TASKS } = require('../../common/localDb');

/**
 * ### Function for removed board
 * @param {string} id - the board's id
 * @returns {Promise<TaskObj[]>}
 */

const deleteBoardsTask = async (id: string): Promise<Array<ITask>> => {
  const newTasks = TASKS.map((el: ITask, index: number) => {
    if (id === el.boardId) {
      return index;
    }
    return el;
  }).filter((el: ITask) => typeof el === 'number');
  newTasks.forEach((el: number, index: number) => {
    TASKS.splice(el - index, 1);
  });
  return taskRepo.TASKS;
};

/**
 * ### Function for removed user
 * @param {string} id - the user's id
 */

const updateUser = async (id: string): Promise<void> => {
  taskRepo.TASKS.forEach((el: ITask) => {
    if (el.userId === id) {
      const newObj = { ...el, userId: null };
      Object.assign(el, newObj);
    }
  });
};

module.exports = { deleteBoardsTask, updateUser };
