import { NextFunction, Request, Response } from 'express';
import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../common/config';

export const isCorrectToken = (
  req: Request,
  res: Response,
  next: NextFunction
): Response | void => {
  switch (req.url) {
    case '/':
      return next();
    case '/login':
      return next();
    case '/doc':
      return next();
    default: {
      const auth = req.headers.authorization;
      if (auth) {
        const [type, token] = auth.split(' ');
        if (type !== 'Bearer' || !token) {
          return res
            .status(StatusCodes.UNAUTHORIZED)
            .send('Something went wrong');
        }
        jwt.verify(token, String(JWT_SECRET_KEY), { complete: true });

        return next();
      }
      return res
        .status(StatusCodes.UNAUTHORIZED)
        .send(ReasonPhrases.UNAUTHORIZED);
    }
  }
};
