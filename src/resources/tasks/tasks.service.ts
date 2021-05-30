import { ITask } from '../../interfaces';

const tasksMemory = require('./tasks.memory.repository');

const getAllTasks = (): Promise<Array<ITask>> => tasksMemory.getAllTasks();

const getTaskById = (id: string): Promise<ITask> => tasksMemory.getTaskById(id);

const createTask = (task: ITask): Promise<ITask> =>
  tasksMemory.createTask(task);

const changeTask = (task: ITask, id: string): Promise<ITask> =>
  tasksMemory.changeTask(task, id);

const deleteTask = (id: string): Promise<Array<ITask>> =>
  tasksMemory.deleteTask(id);

module.exports = {
  getAllTasks,
  getTaskById,
  createTask,
  changeTask,
  deleteTask,
};
