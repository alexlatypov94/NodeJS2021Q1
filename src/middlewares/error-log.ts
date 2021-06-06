import { NextFunction, Request, Response } from 'express';
import fs from 'fs';

export const errorLog = (
  _err: Error,
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const time = new Date();
  const errorInfo = `${time} status: ${500} ${JSON.stringify(req.query)} \n`;
  fs.appendFileSync('./logs/errorLogging.txt', errorInfo);
  res.status(500).send('something wrong');
  next();
};
