/**
 * The module for Task memory functions
 * @module TaskMemoryRepo
 */
export {}
import { ITask } from "../../interfaces";
const { TASKS } = require('../../common/localDb');

/**
 * ## Get all tasks
 * @returns {Promise<TaskObj[]>} - all tasks
 */

const getAllTasks = async (): Promise<Array<ITask>> => TASKS;

/**
 * ## Get task by ID
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj>} - needed task
 */

const getTaskById = async (id: string): Promise<ITask> => TASKS.find((el: ITask) => id === el.id);

/**
 * ## Create new task
 * @param {Object} task - task
 * @returns {Promise<TaskObj>} - new task
 */

const createTask = async (task: ITask): Promise<ITask> => {
  TASKS.push(task);
  return getTaskById(task.id);
};

/**
 * ## Change task
 * @param {Object} task - task
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj>} - changed task
 */

const changeTask = async (task: ITask, id: string): Promise<ITask> => {
  const currentTask = TASKS.find((el: ITask) => id === el.id);
  return Object.assign(currentTask, task);
};

/** 
 * ## Remove task
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj[]>} - all tasks
 */

const deleteTask = async (id: string): Promise<Array<ITask>> => {
  const taskIndex = TASKS.findIndex((el: ITask) => id === el.id);
  TASKS.splice(taskIndex, 1);
  return TASKS;
};

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  changeTask,
  deleteTask,
};
