const boardMemory = require('./boards.memory.repository');

const getAllBoards = () => boardMemory.getAllBoards();
const getBoardById = (id) => boardMemory.getBoardById(id);
const createBoard = (board) => boardMemory.createBoard(board);

module.exports = { getAllBoards, getBoardById, createBoard };
