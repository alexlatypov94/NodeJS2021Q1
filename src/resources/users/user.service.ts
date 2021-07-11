import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Task } from '../../entities/task.model';
import { User } from '../../entities/user.model';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(Task)
    private readonly taskRepo: Repository<Task>,
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async createUser(user: User): Promise<User> {
    const result = await this.userRepo.create(user);
    const savedResult = await this.userRepo.save(result);
    return savedResult;
  }

  async getAllUsers(): Promise<Array<User>> {
    const result = await this.userRepo.find();
    return result;
  }

  async getUserById(id: string): Promise<User | undefined> {
    const result = await this.userRepo.findOne(id);
    return result;
  }

  async changeUser(user: User, id: string): Promise<User | undefined> {
    await this.userRepo.update(id, user);
    const result = await this.userRepo.findOne(id);
    return result;
  }

  async deleteUser(id: string): Promise<Array<User>> {
    await this.userRepo.delete(id);
    await this.taskRepo.update({ userId: id }, { userId: null });
    const result = await this.userRepo.find();
    return result;
  }
}
