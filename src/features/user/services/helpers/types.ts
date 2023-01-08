import type {
  Attributes,
  Model,
  WhereAttributeHash,
  WhereOptions,
} from 'sequelize';

type findUserParams<M extends Model<any, any>> = {
  where: WhereOptions<WhereAttributeHash<M>>;
};

type CreateUserParams = {
  email: string;
};

type FindOrCreateUserParams<M extends Model<Attributes<M>, Attributes<M>>> = {
  defaults: CreateUserParams;
  where: WhereOptions<Attributes<M>>;
};

export { CreateUserParams, FindOrCreateUserParams, findUserParams };
