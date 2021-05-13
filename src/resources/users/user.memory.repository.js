const { USERS_DB } = require('../../common/localDb');

const getAllUsers = async () => USERS_DB;

const getUserById = async (id) => USERS_DB.find((el) => id === el.id);

const createUser = async (user) => {
  USERS_DB.push(user);
  return getUserById(user.id);
};

const changeUser = async (user, id) => {
  const currentUser = USERS_DB.find((el) => id === el.id);
  return Object.assign(currentUser, user);
};

const deleteUser = async (id) => {
  const index = USERS_DB.findIndex((el) => id === el.id);
  USERS_DB.splice(index, 1);
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
  changeUser,
  deleteUser,
};
