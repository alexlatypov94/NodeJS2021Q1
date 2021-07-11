import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { BoardsController } from './boards.controller';
import { Board } from '../../entities/board.model';
import { BoardsService } from './boards.service';
import { Task } from '../../entities/task.model';

@Module({
  imports: [TypeOrmModule.forFeature([Board, Task])],
  controllers: [BoardsController],
  providers: [BoardsService],
})
export class BoardsModule {}
