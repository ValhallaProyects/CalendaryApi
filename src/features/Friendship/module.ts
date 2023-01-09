import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

// $ Friendship stuff
import { FriendshipController } from './controller';
import { FriendshipService } from './service';
import { Friendship } from 'src/db/entities';

@Module({
  imports: [SequelizeModule.forFeature([Friendship])], // Data exterior que necesita.
  providers: [FriendshipService], // Data de si "mismo", para construir el UserModel.
  controllers: [FriendshipController],
  exports: [FriendshipService], // Data que exporta el UserModel. Que es accesible para el exterior.
})
export class FriendshipModule {}
