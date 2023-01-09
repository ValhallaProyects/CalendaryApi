import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

// $ UserSetting stuff
import { UserSettingController } from './controller';
import { UserSettingService } from './service';
import { UserSetting } from 'src/db/entities';

@Module({
  imports: [SequelizeModule.forFeature([UserSetting])], // Data exterior que necesita.
  providers: [UserSettingService], // Data de si "mismo", para construir el UserModel.
  controllers: [UserSettingController],
  exports: [UserSettingService], // Data que exporta el UserModel. Que es accesible para el exterior.
})
export class UserSettingModule {}
