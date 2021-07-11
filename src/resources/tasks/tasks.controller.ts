import {
  Controller,
  Get,
  Post,
  Delete,
  Res,
  Req,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { AuthGuard } from '../../guards/AuthGuards';
import { TaskService } from './tasks.service';

@UseGuards(AuthGuard)
@Controller('/boards/:boardId/tasks')
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<void> {
    const newTask = req.body;
    const { boardId } = req.params;
    if (boardId) {
      const task = await this.taskService.createTask(newTask, boardId);
      res.status(201).send(task);
    }
  }

  @Get('/')
  async findAll(@Req() req: Request, @Res() res: Response): Promise<void> {
    const { boardId } = req.params;
    const tasks = await this.taskService.getAllTasks(boardId as string);
    res.status(200).send(tasks);
  }

  @Get(':taskId')
  async findOne(@Req() req: Request, @Res() res: Response): Promise<void> {
    const task = await this.taskService.getTaskById(
      req.params['taskId'] as string
    );
    if (!task) {
      res.status(404).send();
    } else {
      res.status(200).send(task);
    }
  }

  @Put(':taskId')
  async update(@Req() req: Request, @Res() res: Response): Promise<void> {
    const task = await this.taskService.changeTask(
      req.body,
      req.params['taskId'] as string
    );
    res.status(200).send(task);
  }

  @Delete(':taskId')
  async remove(@Req() req: Request, @Res() res: Response): Promise<void> {
    const tasks = await this.taskService.deleteTask(
      req.params['taskId'] as string
    );
    res.status(204).send(tasks);
  }
}
