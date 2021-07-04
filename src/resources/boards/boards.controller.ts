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
import { AuthGuard } from '../../guards/AuthGuards';
import { BoardsService } from './boards.service';

@UseGuards(AuthGuard)
@Controller('/boards')
export class BoardsController {
  constructor(private readonly boardService: BoardsService) {}

  @Post('/')
  async create(@Req() req: Request, @Res() res: Response): Promise<void> {
    const newBoard = req.body;
    const board = await this.boardService.createBoard(newBoard);
    res.status(201).send(board);
  }

  @Get('/')
  async findAll(@Req() _req: Request, @Res() res: Response): Promise<void> {
    const boards = await this.boardService.getAllBoards();
    res.status(200).send(boards);
  }

  @Get(':boardId')
  async findOne(
    @Param('boardId') boardId: string,
    @Res() res: Response
  ): Promise<void> {
    const board = await this.boardService.getBoardById(boardId);
    if (board) {
      res.status(200).send(board);
    } else {
      res.status(404).send();
    }
  }

  @Put(':boardId')
  async update(
    @Param('boardId') boardId: string,
    @Req() req: Request,
    @Res() res: Response
  ): Promise<void> {
    const currentBoard = await this.boardService.changeBoard(req.body, boardId);
    res.status(200).send(currentBoard);
  }

  @Delete(':boardId')
  async remove(
    @Param('boardId') boardId: string,
    @Res() res: Response
  ): Promise<void> {
    const updateBoards = await this.boardService.deleteBoard(boardId);
    res.status(204).send(updateBoards);
  }
}
