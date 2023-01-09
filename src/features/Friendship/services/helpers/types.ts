import type { Attributes, Model } from 'sequelize';
import { findRecordParams } from 'src/utilities/types';

type findFriendshipParams<M extends Model<Attributes<M>>> = Pick<
  findRecordParams<M>,
  'where' | 'options'
>;

type CreateFriendshipParams = {
  email: string;
};

export { CreateFriendshipParams, findFriendshipParams };
