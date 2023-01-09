import { Auth } from 'src/db/entities';
import { findRecord } from 'src/utilities';
import { findAuthParams } from './types';

const findAuth = async ({
  where,
}: findAuthParams<Auth>): Promise<Auth | null> =>
  await findRecord<Auth>({ where, model: Auth });

export { findAuth };
