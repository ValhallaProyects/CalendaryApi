import type {
  Attributes,
  CreationAttributes,
  Model,
  ModelStatic,
  WhereAttributeHash,
  WhereOptions,
} from 'sequelize';

type createRecordParams<M extends Model<Attributes<M>>> = {
  data: CreationAttributes<M>;
  model: ModelStatic<M>;
};

type FindOrCreateRecordParams<M extends Model<Attributes<M>>> = {
  defaults: CreationAttributes<M>;
  where: WhereOptions<Attributes<M>>;
  model: ModelStatic<M>;
};

type findRecordParams<M extends Model<Attributes<M>>> = {
  where: WhereOptions<WhereAttributeHash<M>>;
  model: ModelStatic<M>;
};

export { createRecordParams, FindOrCreateRecordParams, findRecordParams };
