import type { Attributes, Model } from 'sequelize';
import { findRecordParams } from 'src/utilities/types';

type findUserParams<M extends Model<Attributes<M>>> = Pick<
  findRecordParams<M>,
  'where' | 'options'
>;

type CreateUserParams = {
  email: string;
};

export { CreateUserParams, findUserParams };
