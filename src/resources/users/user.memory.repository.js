/**
 * The module for User memory functions
 * @module UserMemoryRepo
 */

const { USERS_DB } = require('../../common/localDb');
const { updateUser } = require('../utils/taskRemove');

/**
 * ## Get all Users
 * @returns {Promise<UserObj[]>} - All users
 */

const getAllUsers = async () => USERS_DB;

/**
 * ## Get user by ID
 * @param {string} id - The user's id
 * @returns {Promise<UserObj>} - the current user
 */

const getUserById = async (id) => USERS_DB.find((el) => id === el.id);

/**
 * ## Create new user
 * @param {Object} user - new User
 * @returns {Promise<UserObj>} - new User
 */

const createUser = async (user) => {
  USERS_DB.push(user);
  return getUserById(user.id);
};

/**
 * ## Change user
 * @param {Object} user - The current user
 * @param {string} id - The user's id
 * @returns {Promise<UserObj>} - Changed User
 */

const changeUser = async (user, id) => {
  const currentUser = USERS_DB.find((el) => id === el.id);
  return Object.assign(currentUser, user);
};

/**
 * ## Remove user
 * @param {string} id - The user ID
 * @returns {Promise<UserObj[]>} - all users
 */

const deleteUser = async (id) => {
  const index = USERS_DB.findIndex((el) => id === el.id);
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
