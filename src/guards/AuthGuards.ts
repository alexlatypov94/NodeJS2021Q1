// import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import { Injectable, CanActivate, ExecutionContext } from '@nestjs/common';
import { Observable } from 'rxjs';
import jwt from 'jsonwebtoken';
import { JWT_SECRET_KEY } from '../common/config';

@Injectable()
export class AuthGuard implements CanActivate {
  // eslint-disable-next-line class-methods-use-this
  canActivate(
    context: ExecutionContext
  ): boolean | Promise<boolean> | Observable<boolean> {
    const req = context.switchToHttp().getRequest();
    const res = context.switchToHttp().getResponse();
    try {
      const authToken = req.headers.authorization;
      if (authToken) {
        const [type, token] = authToken.split(' ');
        if (!token) {
          res.status(401).send({ message: 'Wrong token' });
          return false;
          // eslint-disable-next-line no-else-return
        } else if (type !== 'Bearer') {
          res.status(401).send({ message: 'Wrong auth scheme' });
          return false;
        } else {
          jwt.verify(token, JWT_SECRET_KEY || '');
          return true;
        }
      }
      res.status(401).send({ message: 'Not authorized' });
      return false;
    } catch (err) {
      res.status(403).send({ message: 'Wrong token' });
      return false;
    }
  }
}
