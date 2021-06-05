import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { finished } from 'stream';

export const logging = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  const { method, url } = req;
  const currentTime = new Date();

  next();

  finished(res, () => {
    const processingTime = Date.now() - start;
    const { statusCode } = res;
    const isEmpty = (): boolean => !Object.keys(req.body).length;
    const dataBody = isEmpty() ? 'body is empty' : JSON.stringify(req.body);
    const baseUrl = 'http://localhost:4000';
    const logData = `${currentTime.toUTCString()} ${method} ${
      baseUrl + url
    } status:${statusCode} [${processingTime}] \n ${dataBody} \n`;
    console.log(dataBody);

    fs.appendFileSync('logs/logging.txt', logData);
  });
};
