import { IUser } from '../../interfaces';
import { USERS_DB } from '../../common/localDb';

const { updateUser } = require('../utils/taskRemove');

const getAllUsers = async (): Promise<Array<IUser>> => USERS_DB;

const getUserById = async (id: string): Promise<IUser> =>
  USERS_DB.find((el: IUser) => id === el.id) as IUser;

const createUser = async (user: IUser): Promise<IUser> => {
  USERS_DB.push(user);
  return getUserById(user.id);
};

const changeUser = async (user: IUser, id: string): Promise<IUser> => {
  const currentUser = USERS_DB.find((el: IUser) => id === el.id);
  return Object.assign(currentUser, user);
};

const deleteUser = async (id: string): Promise<Array<IUser>> => {
  const index = USERS_DB.findIndex((el: IUser) => id === el.id);
  USERS_DB.splice(index, 1);
  updateUser(id);
  return USERS_DB;
};

export const usersRepo = {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
  deleteUser,
};
