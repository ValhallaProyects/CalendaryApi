import {
  Body,
  Controller,
  Get,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';

// $ User stuff
import { UserService } from './service';
import { CreateUserDto } from './dto';
import { UserData } from './interfaces';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('user')
export class UserController {
  constructor(private userService: UserService) {}

  @Get('profile')
  getProfile(@Request() req) {
    return { userId: req.user };
  }

  @Post()
  async create(@Body() data: CreateUserDto): Promise<string> {
    return await this.userService.create(data);
  }

  @Get()
  async getAll(): Promise<UserData[] | []> {
    return await this.userService.getAll();
  }
}
