import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './resources/users/user.module';
import { TaskModule } from './resources/tasks/tasks.module';
import { BoardsModule } from './resources/boards/boards.module';
import { LoginModule } from './resources/login/login.module';
import config from './common/ormconfig';
import { Logger } from './middlewares/logging-handler.module';
import { ErrorLog } from './middlewares';

@Module({
  imports: [
    TypeOrmModule.forRoot(config),
    BoardsModule,
    TaskModule,
    UsersModule,
    ErrorLog,
    LoginModule,
    Logger,
  ],
})
export class AppModule {}
