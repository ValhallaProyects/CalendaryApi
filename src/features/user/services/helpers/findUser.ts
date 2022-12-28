import type { Model, WhereAttributeHash, WhereOptions } from 'sequelize';

import { User } from 'src/db/entities';
import { findRecord } from 'src/utilities';

type findUserParams<M extends Model<any, any>> = {
  where: WhereOptions<WhereAttributeHash<M>>;
};
const findUser = async ({
  where,
}: findUserParams<User>): Promise<User | null> => {
  return;
};
// await findRecord({ model: User, where });

export { findUser };
