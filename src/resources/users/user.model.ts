import { IUser } from "../../interfaces";

const uuid = require('uuid');
/**
 * @typedef {Object} UserObj - User
 * @property {string} id - The user's id
 * @property {string} name - The user's name
 * @property {string} login - The user's login
 * @property {string} password - The user's password
 */

/** Class User */
class User implements IUser {
  id: string;
  name: string;
  login: string;
  password: string;
  /**
   * @param {string} id - The user's id
   * @param {string} name - The user's name
   * @param {string} login - The user's login
   * @param {string} password - The user's password
   */
  constructor({
    id = uuid.v1(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  } = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  /**
   * @param {Object} user - get the user object
   * @returns {Object} new user
   */

  static toResponse(user: IUser) {
    const { id, name, login } = user;
    return { id, name, login };
  }
}

module.exports = User;
