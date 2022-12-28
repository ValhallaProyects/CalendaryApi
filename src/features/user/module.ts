import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

// $ User stuff
import { UserController } from './controller';
import { UserService } from './service';
import { User } from 'src/db/entities';

@Module({
  imports: [SequelizeModule.forFeature([User])], // Data exterior que necesita.
  providers: [UserService], // Data de si "mismo", para construir el UserModel.
  controllers: [UserController],
  exports: [UserService], // Data que exporta el UserModel. Que es accesible para el exterior.
})
export class UserModule {}
