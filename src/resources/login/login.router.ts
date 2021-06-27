import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import express, { Request, Response } from 'express';
import { JWT_SECRET_KEY } from '../../common/config';
import { isAuth } from './login.service';

const logRouter = express.Router();

logRouter.route('/').post(async (req: Request, res: Response) => {
  const user = req.body;
  const foundedUser = await isAuth(user);
  if (foundedUser) {
    const payload = { userId: foundedUser.id, login: foundedUser.login };
    const token = jwt.sign(payload, String(JWT_SECRET_KEY));
    return res.status(StatusCodes.OK).json({ token });
  }
  return res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
});

export default logRouter;
