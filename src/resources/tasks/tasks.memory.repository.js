const { TASKS } = require('../../common/localDb');

const getAllTasks = async () => TASKS;

const getTaskById = async (id) => TASKS.find((el) => id === el.id);

const createTask = async (task) => {
  TASKS.push(task);
  return getTaskById(task.id);
};

const changeTask = async (task, id) => {
  const currentTask = TASKS.find((el) => id === el.id);
  return Object.assign(currentTask, task);
};

const deleteTask = async (id) => {
  const taskIndex = TASKS.findIndex((el) => id === el.id);
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
