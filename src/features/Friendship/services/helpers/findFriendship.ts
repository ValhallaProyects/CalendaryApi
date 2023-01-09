import { Friendship } from 'src/db/entities';
import { findRecord } from 'src/utilities';
import { findFriendshipParams } from './types';

const findFriendship = async ({
  where,
  options,
}: findFriendshipParams<Friendship>): Promise<Friendship | null> =>
  await findRecord({ model: Friendship, where, options });

export { findFriendship };
