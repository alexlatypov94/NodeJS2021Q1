import { User } from '../../entities/user.model';
import { usersRepo } from './user.memory.repository';

const getAllUsers = (): Promise<Array<User>> => usersRepo.getAllUsers();

const getUserById = (id: string): Promise<User | undefined> =>
  usersRepo.getUserById(id);

const createUser = (user: User): Promise<User> => usersRepo.createUser(user);

const changeUser = (user: User, id: string): Promise<User | undefined> =>
  usersRepo.changeUser(user, id);

const deleteUser = (id: string): Promise<Array<User>> =>
  usersRepo.deleteUser(id);

export const usersService = {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
  deleteUser,
};
