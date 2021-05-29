/**
 * Module for all User services functions
 * @module UserServices
 */

import { IUser } from "../../interfaces";
const usersRepo = require('./user.memory.repository');

/**
 * ### User service
 * @returns {Promise<UserObj[]>} - all tasks
 */

const getAllUsers = (): Promise<Array<IUser>> => usersRepo.getAllUsers();

/**
 * ### User service
 * @param {string} id - the user's id
 * @returns {Promise<UserObj>} - the user with current id
 */

const getUserById = (id: string): Promise<IUser> => usersRepo.getUserById(id);

/**
 * ### User service
 * @param {Object} user - the user
 * @returns {Promise<UserObj>} - new User
 */

const createUser = (user: IUser): Promise<IUser> => usersRepo.createUser(user);

/**
 * ### User service
 * @param {Object} user - the user
 * @param {string} id - the user's id
 * @returns {Promise<UserObj>} - the changed user
 */

const changeUser = (user: IUser, id: string): Promise<IUser> => usersRepo.changeUser(user, id);

/**
 * ### User service
 * @param {string} id - the user's id
 * @returns {Promise<UserObj[]>}
 */

const deleteUser = (id: string): Promise<Array<IUser>> => usersRepo.deleteUser(id);

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
  deleteUser,
};
