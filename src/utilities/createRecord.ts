import type { Model, Attributes } from 'sequelize/types/model';
import type { createRecordParams } from './types';

/** Builds a new model instance and calls save on it.*/
const createRecord = async <M extends Model<Attributes<M>>>({
  data,
  model,
}: createRecordParams<M>): Promise<M | null> => await model.create({ ...data });

export { createRecord };
