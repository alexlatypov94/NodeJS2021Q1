import bcrypt from 'bcrypt';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../../entities/user.model';

@Injectable()
export class LoginService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>
  ) {}

  async isAuth(user: Partial<User>): Promise<User | false> {
    const { login, password } = user;
    const foundedUser = await this.userRepo.findOne({ login });
    if (
      foundedUser &&
      (await bcrypt.compare(String(password), String(foundedUser?.password)))
    ) {
      return foundedUser;
    }
    return false;
  }
}
