import { getRepository } from 'typeorm';
import { Task } from '../../entities/task.model';

const getAllTasks = async (boardId: string): Promise<Array<Task>> => {
  const taskRepo = getRepository(Task);
  const result = await taskRepo.find({ where: { boardId } });
  return result;
};

const getTaskById = async (id: string): Promise<Task | undefined> => {
  const taskRepo = getRepository(Task);
  const result = await taskRepo.findOne(id);
  return result;
};

const createTask = async (task: Task, boardId: string): Promise<Task> => {
  const taskRepo = getRepository(Task);
  const result = await taskRepo.create({ ...task, boardId });
  const savedResult = await taskRepo.save(result);
  return savedResult;
};

const changeTask = async (task: Task, id: string): Promise<Task> => {
  const taskRepo = getRepository(Task);
  const result = await taskRepo.update(id, task);
  return result.raw;
};

const deleteTask = async (id: string): Promise<void> => {
  const taskRepo = getRepository(Task);
  await taskRepo.delete(id);

};

export const tasksMemory = {
  getAllTasks,
  getTaskById,
  createTask,
  changeTask,
  deleteTask,
};
