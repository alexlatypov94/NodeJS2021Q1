import fs from 'fs';

const createErrorInfo = (name: string, message: string) => {
  const time = new Date();
  const errorInfo = `${time} status: 500 error: ${name} ${message} type: uncaughtException \n`;
  fs.appendFileSync('./logs/errorLogging.txt', errorInfo);
  process.stdout.write(errorInfo);
  process.exit(1);
};

export const errorHandler = (): void => {
  process.on('uncaughtException', (error: Error) => {
    createErrorInfo(error.name, error.message);
  });
  process.on('unhandledRejection', (error: Error) => {
    createErrorInfo(error.name, error.message);
  });
};
