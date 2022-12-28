import type { Attributes, Model, WhereOptions } from 'sequelize';

type CreateUserParams = {
  email: string;
};

type FindOrCreateUserParams<M extends Model<Attributes<M>, Attributes<M>>> = {
  defaults: CreateUserParams;
  where: WhereOptions<Attributes<M>>;
};

export { CreateUserParams, FindOrCreateUserParams };
