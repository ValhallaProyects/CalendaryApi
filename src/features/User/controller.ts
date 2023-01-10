import {
  Controller,
  Get,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';

// $ User stuff
import { UserService } from './service';
import { UserData } from './interfaces';
import { JwtAuthGuard } from '../Auth/guards/jwt-auth.guard';
import { HttpExceptionFilter } from 'src/helpers/httpExceptionFilter';

@UseGuards(JwtAuthGuard)
@UseFilters(new HttpExceptionFilter())
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  async getUser(@Request() req): Promise<UserData> {
    return await this.userService.getUser(req.user);
  }
}
