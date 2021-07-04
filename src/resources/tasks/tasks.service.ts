import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../entities/task.model';
import { User } from '../../entities/user.model';

@Injectable()
export class TaskService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>
  ) {}

  async createTask(task: Task, boardId: string): Promise<Task> {
    const result = await this.taskRepo.create({ ...task, boardId });
    const savedResult = await this.taskRepo.save(result);
    return savedResult;
  }

  async getAllTasks(boardId: string): Promise<Array<Task>> {
    const result = await this.taskRepo.find({ where: { boardId } });
    return result;
  }

  async getTaskById(id: string): Promise<Task | undefined> {
    const result = await this.taskRepo.findOne(id);
    return result;
  }

  async changeTask(task: User, id: string): Promise<Task | undefined> {
    await this.taskRepo.update(id, task);
    const result = await this.taskRepo.findOne(id);
    return result;
  }

  async deleteTask(id: string): Promise<Array<Task>> {
    await this.taskRepo.delete(id);
    const result = await this.taskRepo.find();
    return result;
  }
}
