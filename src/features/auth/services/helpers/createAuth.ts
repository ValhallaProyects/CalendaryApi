import { Auth } from 'src/db/entities';
import { createRecord } from 'src/utilities';
import type { CreateAuthParams } from './types';

const createAuth = async (data: CreateAuthParams): Promise<Auth | null> => {
  return await createRecord<Auth>({ data, model: Auth });
};

export { createAuth };
