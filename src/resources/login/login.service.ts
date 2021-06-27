import bcrypt from 'bcrypt';
import { getRepository } from 'typeorm';
import { User } from '../../entities/user.model';

export const isAuth = async (user: Partial<User>): Promise<User | false> => {
  const { login, password } = user;
  const userRepo = getRepository(User);
  const foundedUser = await userRepo.findOne({ login });
  if (
    foundedUser &&
    (await bcrypt.compare(String(password), String(foundedUser?.password)))
  ) {
    return foundedUser;
  }
  return false;
};
