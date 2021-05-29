/**
 * Module for all Task services functions
 * @module TaskServices
 */

import { ITask } from "../../interfaces";

const tasksMemory = require('./tasks.memory.repository');

/**
 * ### Task service
 * @returns {Promise<TaskObj[]>} - all tasks
 */
const getAllTasks = (): Promise<Array<ITask>> => tasksMemory.getAllTasks();
/**
 * ### Task service
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj>} - task with current id
 */
const getTaskById = (id: string): Promise<ITask> => tasksMemory.getTaskById(id);
/**
 * ### Task service
 * @param {Object} task - the task
 * @returns {Promise<TaskObj>} - the new task
 */
const createTask = (task: ITask): Promise<ITask> => tasksMemory.createTask(task);
/**
 * ### Task service
 * @param {Object} task - the task 
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj>} - changed task
 */
const changeTask = (task: ITask, id: string): Promise<ITask> => tasksMemory.changeTask(task, id);
/**
 * ### Task service
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj[]>} - all tasks without deleted task
 */
const deleteTask = (id: string): Promise<Array<ITask>> => tasksMemory.deleteTask(id);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  changeTask,
  deleteTask,
};
