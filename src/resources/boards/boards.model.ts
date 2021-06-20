import { v4 as uuid } from 'uuid';
import { IBoard, IColumn } from '../../interfaces';

export class Board implements IBoard {
  id: string;

  title: string;

  columns: Array<IColumn>;

  constructor({ id = uuid(), title = 'Board1', columns = [] } = {}) {
    this.id = id;
    this.title = title;
    this.columns = columns;
  }

  static toResponse(boards: IBoard): IBoard {
    const { id, title, columns } = boards;
    return { id, title, columns };
  }
}
