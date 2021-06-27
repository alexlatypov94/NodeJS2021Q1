import { createConnection } from 'typeorm';
import { createAdmin } from "../resources/utils/createAdmin";
import config from './ormconfig';
import { IUser, IBoard, ITask } from '../interfaces';

export const USERS_DB: Array<IUser> = [];
export const BOARDS_DB: Array<IBoard> = [];
export const TASKS: Array<ITask> = [];

export const TryDBConnect = async (cb: () => void): Promise<void> => {
  try {
    await createConnection(config);
    await createAdmin();
    cb();
  } catch (err) {
    console.log('DB Connection Error! ', err);
  }
};
