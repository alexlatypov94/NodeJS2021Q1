const uuid = require('uuid');

class Task {
  constructor({
    id = uuid.v1(),
    title = 'task1',
    order = 0,
    description = 'task description',
    userId = uuid.v1(),
    boardId = uuid.v1(),
    columnId = uuid.v1(),
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task) {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId };
  }
}

module.exports = Task;
