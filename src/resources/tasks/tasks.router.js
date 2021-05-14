const router = require('express').Router({ mergeParams: true });
const Task = require('./tasks.model');
const tasksService = require('./tasks.service');

router.route('/').get(async (req, res) => {
  const tasks = await tasksService.getAllTasks();
  res.status(200).json(tasks.map(Task.toResponse));
});

router.route('/:id').get(async (req, res) => {
  const task = await tasksService.getTaskById(req.params.id);
  if (!task) {
    return res.status(404).json();
  }
  return res.status(200).json(Task.toResponse(task));
});

router.route('/').post(async (req, res) => {
  const newTask = new Task({
    title: req.body.title,
    order: req.body.order,
    description: req.body.description,
    userId: req.body.userId,
    boardId: req.params.id,
    columnId: req.body.columnId,
  });

  const task = await tasksService.createTask(newTask);
  res.status(201).json(Task.toResponse(task));
});

router.route('/:id').put(async (req, res) => {
  const task = await tasksService.changeTask(req.body, req.params.id);
  res.status(200).json(Task.toResponse(task));
});

router.route('/:id').delete(async (req, res) => {
  await tasksService.deleteTask(req.params.id);
  res.status(204).json();
});

module.exports = router;
