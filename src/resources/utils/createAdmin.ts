import { getRepository } from "typeorm";
import { User } from "../../entities/user.model";

export const createAdmin = async (): Promise<void> => {
  const repo = getRepository(User);
  const admin = await repo.findOne({
    where: { login: 'admin' },
  });
  if (!admin) {
    const created = repo.create({
      login: 'admin',
      password: 'admin',
    });
    await repo.save(created);
  }
};