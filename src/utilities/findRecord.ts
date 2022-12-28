import type { Attributes, Model } from 'sequelize/types/model';
import type { findRecordParams } from './types';

/** Search for a single instance. Returns the first instance found, or null if none can be found.*/
const findRecord = async <M extends Model<Attributes<M>>>({
  model,
  where,
}: findRecordParams<M>): Promise<M | null> => await model.findOne({ where });

export { findRecord };
