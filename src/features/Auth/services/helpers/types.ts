import type { Attributes, Model } from 'sequelize';
import type { FindOrCreateRecordParams } from 'src/utilities/types';

type CreateAuthParams = {
  email: string;
  userId: number;
};

type FindOrCreateAuthParams<M extends Model<Attributes<M>>> = Omit<
  FindOrCreateRecordParams<M>,
  'model'
>;

type findAuthParams<M extends Model<Attributes<M>>> = Pick<
  FindOrCreateAuthParams<M>,
  'where'
>;

export { CreateAuthParams, FindOrCreateAuthParams, findAuthParams };
