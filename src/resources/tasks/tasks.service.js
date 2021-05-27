/**
 * Module for all Task services functions
 * @module TaskServices
 */

const tasksMemory = require('./tasks.memory.repository');

/**
 * ### Task service
 * @returns {Promise<TaskObj[]>} - all tasks
 */
const getAllTasks = () => tasksMemory.getAllTasks();
/**
 * ### Task service
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj>} - task with current id
 */
const getTaskById = (id) => tasksMemory.getTaskById(id);
/**
 * ### Task service
 * @param {Object} task - the task
 * @returns {Promise<TaskObj>} - the new task
 */
const createTask = (task) => tasksMemory.createTask(task);
/**
 * ### Task service
 * @param {Object} task - the task 
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj>} - changed task
 */
const changeTask = (task, id) => tasksMemory.changeTask(task, id);
/**
 * ### Task service
 * @param {string} id - the task's id
 * @returns {Promise<TaskObj[]>} - all tasks without deleted task
 */
const deleteTask = (id) => tasksMemory.deleteTask(id);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  changeTask,
  deleteTask,
};
