const uuid = require('uuid');

class Boards {
  constructor({ id = uuid.v1(), title = 'Board1', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(boards) {
    const { id, title, columns } = boards;
    return { id, title, columns };
  }
}

module.exports = Boards;
