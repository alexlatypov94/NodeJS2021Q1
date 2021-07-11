import {
  Controller,
  Get,
  Post,
  Param,
  Delete,
  Res,
  Req,
  Put,
  UseGuards,
} from '@nestjs/common';
import { Request, Response } from 'express';
import { User } from '../../entities/user.model';
import { AuthGuard } from '../../guards/AuthGuards';
import { IUser } from '../../interfaces';
import { UsersService } from './user.service';

@UseGuards(AuthGuard)
@Controller('/users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<void> {
    const newUser = req.body;
    const user = await this.usersService.createUser(newUser);
    res.status(201).send(User.toResponse(user));
  }

  @Get('/')
  async findAll(@Req() _req: Request, @Res() res: Response): Promise<void> {
    const users = await this.usersService.getAllUsers();
    res.status(200).send(users.map(User.toResponse));
  }

  @Get(':userId')
  async findOne(
    @Param('userId') userId: string,
    @Res() res: Response
  ): Promise<void> {
    const user = await this.usersService.getUserById(userId);
    res.status(200).send(User.toResponse(user as IUser));
  }

  @Put(':userId')
  async update(
    @Param('userId') userId: string,
    @Req() req: Request,
    @Res() res: Response
  ): Promise<void> {
    const currentUser = await this.usersService.changeUser(req.body, userId);
    res.status(200).send(User.toResponse(currentUser as IUser));
  }

  @Delete(':userId')
  async remove(
    @Param('userId') userId: string,
    @Res() res: Response
  ): Promise<void> {
    const users = await this.usersService.deleteUser(userId);
    res.status(204).send(users.map(User.toResponse));
  }
}
