import type { Attributes, Model } from 'sequelize';
import type { FindOrCreateRecordParams } from './types';

/** Find a row that matches the query, or build and save the row if none is found. */
const findOrCreateRecord = async <M extends Model<Attributes<M>>>(
  data: FindOrCreateRecordParams<M>,
): Promise<[M, boolean] | null> => {
  const [rec, isCreated] = await data.model.findOrCreate({
    where: { ...data.where },
    defaults: {
      ...data.defaults,
    },
  });

  return [rec, isCreated];
};

export { findOrCreateRecord };
