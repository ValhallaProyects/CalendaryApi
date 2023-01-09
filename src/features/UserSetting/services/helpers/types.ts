import type { Attributes, Model } from 'sequelize';
import { findRecordParams } from 'src/utilities/types';

type findUserSettingParams<M extends Model<Attributes<M>>> = Pick<
  findRecordParams<M>,
  'where' | 'options'
>;

type CreateUserSettingParams = {
  email: string;
};

export { CreateUserSettingParams, findUserSettingParams };
