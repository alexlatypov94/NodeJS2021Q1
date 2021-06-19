import { ITask } from '../../interfaces';
import { TASKS } from '../../common/localDb';

export const deleteBoardsTask = async (id: string): Promise<Array<ITask>> => {
  const newTasks = TASKS.map((el: ITask, index: number) => {
    if (id === el.boardId) {
      return index;
    }
    return el;
  }).filter((el: ITask | number) => typeof el === 'number');

  newTasks.forEach((el: number | ITask, index: number) => {
    TASKS.splice((el as number) - index, 1);
  });
  return TASKS;
};

export const updateUser = async (id: string): Promise<void> => {
  TASKS.forEach((el: ITask) => {
    if (el.userId === id) {
      const newObj = { ...el, userId: null };
      Object.assign(el, newObj);
    }
  });
};

module.exports = { deleteBoardsTask, updateUser };
