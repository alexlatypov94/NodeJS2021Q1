import { IUser } from '../../interfaces';

export {};
const { USERS_DB } = require('../../common/localDb');
const { updateUser } = require('../utils/taskRemove');

const getAllUsers = async (): Promise<Array<IUser>> => USERS_DB;

const getUserById = async (id: string): Promise<IUser> =>
  USERS_DB.find((el: IUser) => id === el.id);

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

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
  deleteUser,
};
