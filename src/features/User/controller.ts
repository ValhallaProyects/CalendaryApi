import { Controller, Get, UseGuards, Request } from '@nestjs/common';

// $ User stuff
import { UserService } from './service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { UserData } from './interfaces';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(@Request() req): Promise<UserData> {
    return await this.userService.getUser(req.user);
  }
}
