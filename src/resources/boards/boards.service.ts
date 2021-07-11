import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Board } from '../../entities/board.model';
import { Task } from '../../entities/task.model';

@Injectable()
export class BoardsService {
  constructor(
    @InjectRepository(Board)
    private readonly boardRepo: Repository<Board>,
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ) {}

  async createBoard(board: Board): Promise<Board> {
    const result = await this.boardRepo.create(board);
    const savedResult = await this.boardRepo.save(result);
    return savedResult;
  }

  async getAllBoards(): Promise<Array<Board>> {
    const result = await this.boardRepo.find();
    return result;
  }

  async getBoardById(id: string): Promise<Board | undefined> {
    const result = await this.boardRepo.findOne(id);
    return result;
  }

  async changeBoard(board: Board, id: string): Promise<Board | undefined> {
    const { columns, ...boardParam } = board;
    await this.boardRepo.update(id, boardParam);
    const result = this.boardRepo.findOne(id);
    return result;
  }

  async deleteBoard(id: string): Promise<Array<Board>> {
    await this.taskRepo.delete({ boardId: id });
    await this.boardRepo.delete(id);
    const result = await this.boardRepo.find();
    return result;
  }
}
