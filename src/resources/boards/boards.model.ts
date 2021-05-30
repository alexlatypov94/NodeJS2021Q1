import { IBoard, IColumn } from '../../interfaces';

export {};
const uuid = require('uuid');

class Board implements IBoard {
  id: string;

  title: string;

  columns: Array<IColumn>;

  constructor({ id = uuid.v1(), title = 'Board1', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(boards: IBoard) {
    const { id, title, columns } = boards;
    return { id, title, columns };
  }
}

module.exports = Board;
