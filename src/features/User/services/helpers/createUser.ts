import { User } from 'src/db/entities';
import { createRecord } from 'src/utilities';
import { CreateUserParams } from './types';

const createUser = async (data: CreateUserParams): Promise<User | null> =>
  await createRecord<User>({ data, model: User });

export { createUser };
