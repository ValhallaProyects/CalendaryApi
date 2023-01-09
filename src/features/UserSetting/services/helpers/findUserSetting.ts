import { UserSetting } from 'src/db/entities';
import { findRecord } from 'src/utilities';
import { findUserSettingParams } from './types';

const findUserSetting = async ({
  where,
  options,
}: findUserSettingParams<UserSetting>): Promise<UserSetting | null> =>
  await findRecord({ model: UserSetting, where, options });

export { findUserSetting };
