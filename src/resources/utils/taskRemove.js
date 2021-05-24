const taskRepo = require('../../common/localDb');
const { TASKS } = require('../../common/localDb');

const deleteBoardsTask = (id) => {
  const newTasks = TASKS.map((el, index) => {
    if (id === el.boardId) {
      return index;
    }
    return el;
  }).filter((el) => typeof el === 'number');
  newTasks.forEach((el, index) => {
    TASKS.splice(el - index, 1);
  });
  return taskRepo.TASKS;
};

const updateUser = (id) => {
  taskRepo.TASKS.forEach((el) => {
    if (el.userId === id) {
      const newObj = { ...el, userId: null };
      Object.assign(el, newObj);
    }
  });
};

module.exports = { deleteBoardsTask, updateUser };
