import { v4 as uuid } from 'uuid';
import { ITask } from '../../interfaces';

export class Task implements ITask {
  id: string;

  title: string;

  order: number;

  description: string;

  userId: string | null;

  boardId: string;

  columnId: string;

  constructor({
    id = uuid(),
    title = 'task1',
    order = 0,
    description = 'task description',
    userId = uuid(),
    boardId = uuid(),
    columnId = uuid(),
  } = {}) {
    this.id = id;
    this.title = title;
    this.order = order;
    this.description = description;
    this.userId = userId;
    this.boardId = boardId;
    this.columnId = columnId;
  }

  static toResponse(task: ITask): ITask {
    const { id, title, order, description, userId, boardId, columnId } = task;
    return { id, title, order, description, userId, boardId, columnId } as ITask;
  }
}
