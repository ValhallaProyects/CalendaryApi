import { Controller, Get, UseGuards, Request } from '@nestjs/common';

// $ User stuff
import { UserService } from './service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('profile')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getProfile(@Request() req) {
    return { userId: req.user };
  }
}
