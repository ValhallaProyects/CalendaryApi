import type { Attributes, Model } from 'sequelize';
import { findRecordParams } from 'src/utilities/types';

type findEventParams<M extends Model<Attributes<M>>> = Pick<
  findRecordParams<M>,
  'where' | 'options'
>;

type CreateEventParams = {};

export { CreateEventParams, findEventParams };
