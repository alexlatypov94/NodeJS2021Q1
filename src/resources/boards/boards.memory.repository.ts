import { IBoard } from '../../interfaces';
import { BOARDS_DB } from '../../common/localDb';
import { deleteBoardsTask } from '../utils/taskRemove';

const getAllBoards = async (): Promise<Array<IBoard>> => BOARDS_DB;

const getBoardById = async (id: string): Promise<IBoard> =>
  BOARDS_DB.find((el: IBoard) => id === el.id) as IBoard;

const createBoard = async (board: IBoard): Promise<IBoard> => {
  BOARDS_DB.push(board);
  return getBoardById(board.id);
};

const changeBoard = async (board: IBoard, id: string): Promise<IBoard> => {
  const currentBoard = BOARDS_DB.find((el: IBoard) => id === el.id);
  return Object.assign(currentBoard, board);
};

const deleteBoard = async (id: string): Promise<Array<IBoard>> => {
  deleteBoardsTask(id);
  const boardIndex: number = BOARDS_DB.findIndex(
    (el: IBoard) => id === el.id
  );
  BOARDS_DB.splice(boardIndex, 1);
  return BOARDS_DB;
};

export const boardMemory = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
