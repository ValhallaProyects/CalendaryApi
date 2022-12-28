import { ConfigModule } from '@nestjs/config';
import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';
import { UserModule, AuthModule } from './features';
import {
  User,
  UserSetting,
  Auth,
  Calendar,
  RegionSetting,
} from './db/entities';
import { JwtStrategy } from './features/auth/strategies/jwt.strategy';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }), // Load envs
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: +process.env.POSTGRES_PORT,
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      models: [User, UserSetting, Auth, Calendar, RegionSetting],
      autoLoadModels: true,
      synchronize: true,
    }),
    UserModule,
    AuthModule,
  ],
  providers: [JwtStrategy],
})
export class AppModule {}
