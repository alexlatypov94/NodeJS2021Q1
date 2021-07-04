import { MiddlewareConsumer, Module, NestModule } from "@nestjs/common";
import { LoginController } from '../resources/login/login.controller';
import { TaskController } from '../resources/tasks/tasks.controller';
import { BoardsController } from "../resources/boards/boards.controller";
import { BoardsModule } from "../resources/boards/boards.module";
import { TaskModule } from "../resources/tasks/tasks.module";
import { UsersModule } from "../resources/users/user.module";
import { UsersController } from '../resources/users/user.controller';
import { LoggingHandler } from "./logging-handler";

@Module({
  imports: [BoardsModule, TaskModule, UsersModule]
})
export class Logger implements NestModule{
  // eslint-disable-next-line class-methods-use-this
  configure(consumer: MiddlewareConsumer): void {
      consumer
        .apply(LoggingHandler)
        .forRoutes(BoardsController, TaskController, UsersController, LoginController);
    }
}