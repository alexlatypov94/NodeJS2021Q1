import { IBoard } from '../../interfaces/interfaceDB';

const boardMemory = require('./boards.memory.repository');

const getAllBoards = (): Promise<Array<IBoard>> => boardMemory.getAllBoards();

const getBoardById = (id: string): Promise<IBoard> =>
  boardMemory.getBoardById(id);

const createBoard = (board: IBoard): Promise<IBoard> =>
  boardMemory.createBoard(board);

const changeBoard = (board: IBoard, id: string): Promise<IBoard> =>
  boardMemory.changeBoard(board, id);

const deleteBoard = (id: string): Promise<Array<IBoard>> =>
  boardMemory.deleteBoard(id);

module.exports = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
