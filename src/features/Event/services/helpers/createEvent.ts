import { Event } from 'src/db/entities';
import { createRecord } from 'src/utilities';
import { CreateEventParams } from './types';

const createEvent = async (data: CreateEventParams): Promise<Event | null> =>
  await createRecord<Event>({ data, model: Event });

export { createEvent };
