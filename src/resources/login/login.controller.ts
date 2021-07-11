import { ReasonPhrases, StatusCodes } from 'http-status-codes';
import jwt from 'jsonwebtoken';
import { Controller, Post, Res, Req } from '@nestjs/common';
import { Request, Response } from 'express';
import { LoginService } from './login.service';
import { JWT_SECRET_KEY } from '../../common/config';

@Controller('/login')
export class LoginController {
  constructor(private readonly loginService: LoginService) {}

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<void> {
    try {
      const user = req.body;
      const foundedUser = await this.loginService.isAuth(user);
      if (foundedUser) {
        const payload = { userId: foundedUser.id, login: foundedUser.login };
        const token = jwt.sign(payload, String(JWT_SECRET_KEY));
        res.status(StatusCodes.OK).send({ token });
      }
    } catch (e) {
      res.status(StatusCodes.UNAUTHORIZED).send(ReasonPhrases.UNAUTHORIZED);
    }
  }
}
