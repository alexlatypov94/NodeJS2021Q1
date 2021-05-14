const tasksMemory = require('./tasks.memory.repository');

const getAllTasks = () => tasksMemory.getAllTasks();
const getTaskById = (id) => tasksMemory.getTaskById(id);
const createTask = (task) => tasksMemory.createTask(task);
const changeTask = (task, id) => tasksMemory.changeTask(task, id);
const deleteTask = (id) => tasksMemory.deleteTask(id);
module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  changeTask,
  deleteTask,
};
