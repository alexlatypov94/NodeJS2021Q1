import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersService } from './user.service';
import { UsersController } from './user.controller';
import { User } from '../../entities/user.model';
import { Task } from '../../entities/task.model';

@Module({
  imports: [TypeOrmModule.forFeature([User, Task])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
