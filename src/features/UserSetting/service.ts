import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// $ UserSetting stuff
import { UserSetting } from 'src/db/entities';
import { UpdateUserSettingDto } from './dto';
import { UserSettingData } from './interfaces';
import { findUserSetting } from './services/helpers';

/* Service controls the logic. */
@Injectable()
export class UserSettingService {
  constructor(
    @InjectModel(UserSetting)
    private readonly UserSettingModel: typeof UserSetting,
  ) {}

  async getUserSetting(userId: string): Promise<UserSettingData> {
    try {
      return await findUserSetting({
        where: { userId },
      });
    } catch (error) {
      throw new HttpException(error?.msg || '', error?.statusCode || 400);
    }
  }
}
