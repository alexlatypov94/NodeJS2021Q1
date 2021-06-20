import { Board } from '../../entities/board.model';
import { boardMemory } from './boards.memory.repository';

const getAllBoards = (): Promise<Array<Board>> => boardMemory.getAllBoards();

const getBoardById = (id: string): Promise<Board | undefined> =>
  boardMemory.getBoardById(id);

const createBoard = (board: Board): Promise<Board> =>
  boardMemory.createBoard(board);

const changeBoard = (board: Board, id: string): Promise<Board> =>
  boardMemory.changeBoard(board, id);

const deleteBoard = (id: string): Promise<boolean> =>
  boardMemory.deleteBoard(id);

export const boardsService = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
