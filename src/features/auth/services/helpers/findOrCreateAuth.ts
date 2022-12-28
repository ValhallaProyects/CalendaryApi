import { Auth } from 'src/db/entities';
import { findOrCreateRecord } from 'src/utilities';
import type { FindOrCreateAuthParams } from './types';

const findOrCreateAuth = async (
  data: FindOrCreateAuthParams<Auth>,
): Promise<[Auth, boolean] | null> =>
  await findOrCreateRecord<Auth>({ ...data, model: Auth });

export { findOrCreateAuth };
