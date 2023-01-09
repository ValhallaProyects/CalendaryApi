import { HttpException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';

// $ Event stuff
import { Event } from 'src/db/entities';
import { UpdateEventDto } from './dto';
import { EventData } from './interfaces';
import { findEvent } from './services/helpers';

/* Service controls the logic. */
@Injectable()
export class EventService {
  constructor(@InjectModel(Event) private readonly EventModel: typeof Event) {}

  async getEvent(eventId: number): Promise<EventData> {
    try {
      return await findEvent({
        where: { id: eventId },
      });
    } catch (error) {
      throw new HttpException(error?.msg || '', error?.statusCode || 400);
    }
  }
}
