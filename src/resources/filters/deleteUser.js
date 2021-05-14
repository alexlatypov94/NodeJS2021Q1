const taskRepo = require('../../common/localDb');

const updateUser = (id) => {
  taskRepo.TASKS.forEach((el) => {
    if (el.userId === id) {
      const newObj = { ...el, userId: null };
      Object.assign(el, newObj);
    }
  });
};

module.exports = updateUser;
