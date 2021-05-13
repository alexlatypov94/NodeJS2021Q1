const Boards = require('../resources/boards/boards.model');
const User = require('../resources/users/user.model');

const USERS_DB = [];

USERS_DB.push(new User(), new User(), new User());
const BOARDS_DB = USERS_DB.map((el) => new Boards(el.id));

module.exports = { USERS_DB, BOARDS_DB };
