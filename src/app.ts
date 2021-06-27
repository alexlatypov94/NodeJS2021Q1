import * as swaggerUI from 'swagger-ui-express';
import * as path from 'path';
import YAML from 'yamljs';
import cors from 'cors';
import express, { Request, Response, NextFunction } from 'express';
import { errorHandler, errorLog, logging } from './middlewares';
import * as userRouter from './resources/users/user.router';
import * as boardsRouter from './resources/boards/boards.router';
import * as tasksRouter from './resources/tasks/tasks.router';
import logRouter from './resources/login/login.router';
import { isCorrectToken } from './middlewares/login';

export const app = express();
const swaggerDocument = YAML.load(path.join(__dirname, '../doc/api.yaml'));
app.use(express.json());
app.use(cors());
errorHandler();
app.use(logging);
app.use(isCorrectToken);
app.use('/doc', swaggerUI.serve, swaggerUI.setup(swaggerDocument));

app.use('/', (req: Request, res: Response, next: NextFunction) => {
  if (req.originalUrl === '/') {
    res.send('Service is running!');
    return;
  }
  next();
});

app.use('/users', userRouter.router);
app.use('/boards', boardsRouter.router);
app.use('/boards/:boardId/tasks', tasksRouter.router);
app.use('/login', logRouter);
app.use(errorLog);
