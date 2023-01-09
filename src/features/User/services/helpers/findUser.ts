import { User } from 'src/db/entities';
import { findRecord } from 'src/utilities';
import { findUserParams } from './types';

const findUser = async ({
  where,
  options,
}: findUserParams<User>): Promise<User | null> =>
  await findRecord({ model: User, where, options });

export { findUser };
