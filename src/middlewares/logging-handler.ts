import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { finished } from 'stream';

export const logging = (
  req: Request,
  res: Response,
  next: NextFunction
): void => {
  const start = Date.now();
  const { method, url } = req;
  const currentTime = new Date();

  next();

  finished(res, () => {
    const processingTime = Date.now() - start;
    const { statusCode } = res;
    const isEmpty = (type: string): boolean =>
      !Object.keys(type === 'body' ? req.body : req.query).length;
    const dataBody = isEmpty('body')
      ? 'body is empty'
      : JSON.stringify(req.body);
    const dataQuery = isEmpty('query')
      ? 'query is empty'
      : JSON.stringify(req.query);
    const baseUrl = 'http://localhost:4000';
    const logData = `${currentTime.toUTCString()} ${method} ${
      baseUrl + url
    } status:${statusCode} [${processingTime}] \n ${dataBody} \n ${dataQuery} \n`;

    fs.appendFileSync('logs/logging.txt', logData);
    process.stdout.write(logData);
  });
};
