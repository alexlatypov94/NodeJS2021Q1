const taskRepo = require('../../common/localDb');

const deleteBoardsTask = (id) => {
  taskRepo.TASKS = taskRepo.TASKS.filter((el) => id !== el.boardId);
  return taskRepo.TASKS;
};

module.exports = deleteBoardsTask;
