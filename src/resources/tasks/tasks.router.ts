import express, { Request, Response } from 'express';
import { tasksService } from './tasks.service';

export const router = express.Router({ mergeParams: true });

router.route('/').get(async (req: Request, res: Response) => {
  const { boardId } = req.params;
  const tasks = await tasksService.getAllTasks(boardId as string);
  res.status(200).json(tasks);
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  const task = await tasksService.getTaskById(req.params['taskId'] as string);
  if (!task) {
    res.status(404).json();
  } else {
    res.status(200).json(task);
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const newTask = req.body;
  const { boardId } = req.params;
  if (boardId) {
    const task = await tasksService.createTask(newTask, boardId);
    res.status(201).json(task);
  }
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  const task = await tasksService.changeTask(
    req.body,
    req.params['taskId'] as string
  );
  res.status(200).json(task);
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  const tasks = await tasksService.deleteTask(req.params['taskId'] as string);
  res.status(204).json(tasks);
});
