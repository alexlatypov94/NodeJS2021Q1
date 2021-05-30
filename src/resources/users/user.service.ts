import { IUser } from '../../interfaces';

const usersRepo = require('./user.memory.repository');

const getAllUsers = (): Promise<Array<IUser>> => usersRepo.getAllUsers();

const getUserById = (id: string): Promise<IUser> => usersRepo.getUserById(id);

const createUser = (user: IUser): Promise<IUser> => usersRepo.createUser(user);

const changeUser = (user: IUser, id: string): Promise<IUser> =>
  usersRepo.changeUser(user, id);

const deleteUser = (id: string): Promise<Array<IUser>> =>
  usersRepo.deleteUser(id);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
  deleteUser,
};
