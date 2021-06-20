import { getRepository } from 'typeorm';
import { Task } from '../../entities/task.model';

export const deleteBoardsTask = async (id: string): Promise<void> => {
  const taskRepo = getRepository(Task);
  await taskRepo.delete({ boardId: id });
};

export const updateUser = async (id: string): Promise<void> => {
  const taskRepo = getRepository(Task);
  await taskRepo.update({ userId: id }, { userId: null });
};
