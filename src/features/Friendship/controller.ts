import {
  Controller,
  Get,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';

// $ Friendship stuff
import { FriendshipService } from './service';
import { FriendshipData } from './interfaces';
import { JwtAuthGuard } from '../Auth/guards/jwt-auth.guard';
import { HttpExceptionFilter } from 'src/helpers/httpExceptionFilter';

@UseGuards(JwtAuthGuard)
@UseFilters(new HttpExceptionFilter())
@Controller('friend')
export class FriendshipController {
  constructor(private FriendshipService: FriendshipService) {}

  @Get()
  async getFriendship(@Request() req): Promise<FriendshipData> {
    return await this.FriendshipService.getFriendship();
  }
}
