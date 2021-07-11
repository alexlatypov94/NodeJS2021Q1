import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import fs from 'fs';

@Catch(HttpException)
export class ErrorLog implements ExceptionFilter {
  // eslint-disable-next-line class-methods-use-this
  public catch(_err: Error, host: ArgumentsHost): Response | void {
    const ctx = host.switchToHttp();
    const req = ctx.getRequest();
    const next = ctx.getNext();
    const time = new Date();
    const errorInfo = `${time} status: ${500} ${JSON.stringify(req.query)} \n`;
    process.stdout.write(errorInfo)
    fs.appendFileSync('./logs/errorLogging.txt', errorInfo);
    next();
  }
}
