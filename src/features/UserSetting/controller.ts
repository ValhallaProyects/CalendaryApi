import { Controller, Get, UseGuards, Request } from '@nestjs/common';

// $ UserSetting stuff
import { UserSettingService } from './service';
import { UserSettingData } from './interfaces';
import { JwtAuthGuard } from '../Auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user/setting')
export class UserSettingController {
  constructor(private UserSettingService: UserSettingService) {}

  @Get()
  async getUserSetting(@Request() req): Promise<UserSettingData> {
    return await this.UserSettingService.getUserSetting(req.UserSetting);
  }
}
