import { Entity, PrimaryGeneratedColumn, Column, BeforeInsert } from 'typeorm';
import { v4 as uuid } from 'uuid';
import bcrypt from 'bcrypt';
import { IUser } from '../interfaces';

type IUserForReponse = Omit<IUser, 'password'>;

/**
 * Class representing an user
 */
@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ length: 100 })
  name: string;

  @Column({ length: 100, nullable: true })
  login: string;

  @Column({ length: 100 })
  password: string;

  @BeforeInsert()
  async hashPassword(): Promise<void> {
    this.password = await bcrypt.hash(this.password, 10);
  }

  constructor({
    id = uuid(),
    name = 'USER',
    login = 'user',
    password = 'P@55w0rd',
  }: Partial<IUser> = {}) {
    this.id = id;
    this.name = name;
    this.login = login;
    this.password = password;
  }

  static toResponse(user: IUser): IUserForReponse {
    const { id, name, login } = user;
    return { id, name, login };
  }
}
