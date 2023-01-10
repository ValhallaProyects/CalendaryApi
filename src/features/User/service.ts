import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// $ User stuff
import { User } from 'src/db/entities';
import { UpdateUserDto } from './dto';
import { UserData } from './interfaces';
import { findUser } from './services/helpers';

/* Service controls the logic. */
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly UserModel: typeof User) {}

  async getUser(userId: number): Promise<UserData> {
    return await findUser({
      where: { id: userId },
      options: {
        attributes: ['fullName', 'nickName', 'profilePicture', 'email'],
      },
    });
  }
}
