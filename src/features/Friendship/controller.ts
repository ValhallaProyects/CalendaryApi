import { Controller, Get, UseGuards, Request } from '@nestjs/common';

// $ Friendship stuff
import { FriendshipService } from './service';
import { FriendshipData } from './interfaces';
import { JwtAuthGuard } from '../Auth/guards/jwt-auth.guard';

@UseGuards(JwtAuthGuard)
@Controller('friend')
export class FriendshipController {
  constructor(private FriendshipService: FriendshipService) {}

  @Get()
  async getFriendship(@Request() req): Promise<FriendshipData> {
    return await this.FriendshipService.getFriendship();
  }
}
