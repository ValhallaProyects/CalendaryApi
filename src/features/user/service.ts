import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// $ User stuff
import { User } from 'src/db/entities';
import { CreateUserDto } from './dto';
import { UserData } from './interfaces';

/* Service controls the logic. */
@Injectable()
export class UserService {
  constructor(@InjectModel(User) private readonly UserModel: typeof User) {}

  async create(data: CreateUserDto): Promise<string | any> {
    const [user, created] = await this.UserModel.findOrCreate({
      where: { email: data.email },
      defaults: { ...data },
    });

    if (!created) return 'Already exists an user with that email';

    return `User created successfully, id ${user.dataValues.id}`;
  }

  async getAll(): Promise<UserData[] | []> {
    const records = await this.UserModel.findAll();

    return records as any;
  }

  async findOne(email: string): Promise<User> {
    const rec = await this.UserModel.findOne({ where: { email } });

    return rec;
  }
}
