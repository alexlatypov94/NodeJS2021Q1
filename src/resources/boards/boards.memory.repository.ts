import { getRepository } from 'typeorm';
import { Board } from '../../entities/board.model';
import { deleteBoardsTask } from '../utils/taskRemove';

const getAllBoards = async (): Promise<Array<Board>> => {
  const boardRepo = getRepository(Board);
  const result = await boardRepo.find();
  return result;
};

const getBoardById = async (id: string): Promise<Board | undefined> => {
  const boardRepo = getRepository(Board);
  const result = await boardRepo.findOne(id);
  return result;
};

const createBoard = async (board: Board): Promise<Board> => {
  const boardRepo = getRepository(Board);
  const result = await boardRepo.create(board);
  const savedResult = await boardRepo.save(result);
  return savedResult;
};

const changeBoard = async (board: Board, id: string): Promise<Board> => {
  const { columns, ...boardParam } = board;
  const boardRepo = getRepository(Board);
  const result = await boardRepo.update(id, boardParam);
  return result.raw;
};

const deleteBoard = async (id: string): Promise<boolean> => {
  const boardRepo = getRepository(Board);
  await deleteBoardsTask(id);
  const res = await boardRepo.delete(id);
  return !!res.affected;
};

export const boardMemory = {
  getAllBoards,
  getBoardById,
  createBoard,
  changeBoard,
  deleteBoard,
};
