import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// $ Friendship stuff
import { Friendship } from 'src/db/entities';
import { UpdateFriendshipDto } from './dto';
import { FriendshipData } from './interfaces';
import { findFriendship } from './services/helpers';

/* Service controls the logic. */
@Injectable()
export class FriendshipService {
  constructor(
    @InjectModel(Friendship)
    private readonly FriendshipModel: typeof Friendship,
  ) {}

  async getFriendship(): Promise<string> {
    return 'friendship';
  }
}
