import { Friendship } from 'src/db/entities';
import { createRecord } from 'src/utilities';
import { CreateFriendshipParams } from './types';

const createFriendship = async (
  data: CreateFriendshipParams,
): Promise<Friendship | null> =>
  await createRecord<Friendship>({ data, model: Friendship });

export { createFriendship };
