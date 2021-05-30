import { ITask } from '../../interfaces';

export {};
const { TASKS } = require('../../common/localDb');

const getAllTasks = async (): Promise<Array<ITask>> => TASKS;

const getTaskById = async (id: string): Promise<ITask> =>
  TASKS.find((el: ITask) => id === el.id);

const createTask = async (task: ITask): Promise<ITask> => {
  TASKS.push(task);
  return getTaskById(task.id);
};

const changeTask = async (task: ITask, id: string): Promise<ITask> => {
  const currentTask = TASKS.find((el: ITask) => id === el.id);
  return Object.assign(currentTask, task);
};

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
