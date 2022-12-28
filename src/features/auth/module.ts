import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { AuthService } from './service';
import { UserModule } from '../user/module';
import { ConfigModule, ConfigService } from '@nestjs/config';

// $ jwt
import { JwtModule } from '@nestjs/jwt';
import { AuthController } from './controller';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useFactory: async () => ({
        secret: process.env.JWT_SECRET,
        // signOptions: {
        //   expiresIn: '60s',
        // },
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [AuthService],
  controllers: [AuthController],
  exports: [AuthService],
})
export class AuthModule {}
