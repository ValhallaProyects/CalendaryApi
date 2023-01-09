import { SequelizeModule } from '@nestjs/sequelize';
import { Module } from '@nestjs/common';

// $ Event stuff
import { EventController } from './controller';
import { EventService } from './service';
import { Event } from 'src/db/entities';

@Module({
  imports: [SequelizeModule.forFeature([Event])], // Data exterior que necesita.
  providers: [EventService], // Data de si "mismo", para construir el EventModel.
  controllers: [EventController],
  exports: [EventService], // Data que exporta el EventModel. Que es accesible para el exterior.
})
export class EventModule {}
