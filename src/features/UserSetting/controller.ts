import {
  Controller,
  Get,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';

// $ UserSetting stuff
import { UserSettingService } from './service';
import { UserSettingData } from './interfaces';
import { JwtAuthGuard } from '../Auth/guards/jwt-auth.guard';
import { HttpExceptionFilter } from 'src/helpers/httpExceptionFilter';

@UseGuards(JwtAuthGuard)
@UseFilters(new HttpExceptionFilter())
@Controller('user/setting')
export class UserSettingController {
  constructor(private UserSettingService: UserSettingService) {}

  @Get()
  async getUserSetting(@Request() req): Promise<UserSettingData> {
    return await this.UserSettingService.getUserSetting(req.UserSetting);
  }
}
