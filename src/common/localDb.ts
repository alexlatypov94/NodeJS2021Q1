import { getConnection, createConnection } from 'typeorm';
import { config } from './ormconfig';
import { IUser, IBoard, ITask } from '../interfaces';

export const USERS_DB: Array<IUser> = [];
export const BOARDS_DB: Array<IBoard> = [];
export const TASKS: Array<ITask> = [];

const connectToDB = async () => {
  let connection;
  try {
    connection = await getConnection();
  } catch (err) {
    console.log(`Error: ${err}`);
  }
  try {
    if (connection) {
      if (!connection.isConnected) await connection.connect();
    } else {
      createConnection(config);
    }
    console.log('Successfully connected!');
  } catch (err) {
    console.log('Connection Error! ', err);
  }
};

export const TryDBConnect = async (cb: () => void) => {
  try {
    await connectToDB();
    cb();
  } catch (err) {
    console.log('DB Connection Error! ', err);
  }
};
