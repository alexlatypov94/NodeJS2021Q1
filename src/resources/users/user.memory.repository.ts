import { getRepository } from 'typeorm';
import { User } from '../../entities/user.model';
import { updateUser } from '../utils/taskRemove';

const getAllUsers = async (): Promise<Array<User>> => {
  const userRepo = getRepository(User);
  const result = await userRepo.find();
  return result;
};

const getUserById = async (id: string): Promise<User | undefined> => {
  const userRepo = getRepository(User);
  const result = await userRepo.findOne(id);
  return result;
};

const createUser = async (user: User): Promise<User> => {
  const userRepo = getRepository(User);
  const result = await userRepo.create(user);
  const savedResult = await userRepo.save(result);
  return savedResult;
};

const changeUser = async (user: User, id: string): Promise<User> => {
  const userRepo = getRepository(User);
  const result = await userRepo.update(id, user);
  return result.raw;
};

const deleteUser = async (id: string): Promise<Array<User>> => {
  const userRepo = getRepository(User);
  await userRepo.delete(id);
  updateUser(id);
  const result = await userRepo.find();
  return result;
};

export const usersRepo = {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
  deleteUser,
};
