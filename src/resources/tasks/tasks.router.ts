import { Request, Response } from 'express';

export {};
const router = require('express').Router({ mergeParams: true });
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

router.route('/').get(async (_req: Request, res: Response) => {
  const tasks = await tasksService.getAllTasks();
  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:taskId').get(async (req: Request, res: Response) => {
  const task = await tasksService.getTaskById(req.params['taskId']);
  if (!task) {
    res.status(404).json();
  } else {
    res.status(200).json(Task.toResponse(task));
  }
});

router.route('/').post(async (req: Request, res: Response) => {
  const newTask = new Task({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params['boardId'],
    columnId: req.body.columnId,
  });

  const task = await tasksService.createTask(newTask);
  res.status(201).json(Task.toResponse(task));
});

router.route('/:taskId').put(async (req: Request, res: Response) => {
  const task = await tasksService.changeTask(req.body, req.params['taskId']);
  res.status(200).json(Task.toResponse(task));
});

router.route('/:taskId').delete(async (req: Request, res: Response) => {
  const tasks = await tasksService.deleteTask(req.params['taskId']);
  res.status(204).json(tasks.map(Task.toResponse));
});

module.exports = router;
