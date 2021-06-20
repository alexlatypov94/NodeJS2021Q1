import { tasksMemory } from './tasks.memory.repository';
import { Task } from '../../entities/task.model';

const getAllTasks = (boardId: string): Promise<Array<Task>> =>
  tasksMemory.getAllTasks(boardId);

const getTaskById = (id: string): Promise<Task | undefined> =>
  tasksMemory.getTaskById(id);

const createTask = (task: Task, boardId: string): Promise<Task> =>
  tasksMemory.createTask(task, boardId);

const changeTask = (task: Task, id: string): Promise<Task> =>
  tasksMemory.changeTask(task, id);

const deleteTask = (id: string): Promise<void> => tasksMemory.deleteTask(id);

export const tasksService = {
  getAllTasks,
  getTaskById,
  createTask,
  changeTask,
  deleteTask,
};
