import { NestMiddleware, Injectable, Req, Res, Next } from '@nestjs/common';
import { Request, Response, NextFunction } from 'express';
import fs from 'fs';
import { finished } from 'stream';

@Injectable()
export class LoggingHandler implements NestMiddleware {
  // eslint-disable-next-line class-methods-use-this
  async use(
    @Req() req: Request,
    @Res() res: Response,
    @Next() next: NextFunction
  ): Promise<void> {
    const start = Date.now();
    const { method, url } = req;
    const currentTime = new Date();

    next();

    finished(res, () => {
      const processingTime = Date.now() - start;
      const { statusCode } = res;
      const isEmpty = (type: string): boolean => {
        if (!req.body || !req.query) {
          return true;
        }
        return !Object.keys(type === 'body' ? req.body : req.query).length;
      };
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
  }
}
