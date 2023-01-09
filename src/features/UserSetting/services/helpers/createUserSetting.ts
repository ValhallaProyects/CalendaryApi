import { UserSetting } from 'src/db/entities';
import { createRecord } from 'src/utilities';
import { CreateUserSettingParams } from './types';

const createUserSetting = async (
  data: CreateUserSettingParams,
): Promise<UserSetting | null> =>
  await createRecord<UserSetting>({ data, model: UserSetting });

export { createUserSetting };
