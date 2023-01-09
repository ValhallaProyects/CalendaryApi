import { Event } from 'src/db/entities';
import { findRecord } from 'src/utilities';
import { findEventParams } from './types';

const findEvent = async ({
  where,
  options,
}: findEventParams<Event>): Promise<Event | null> =>
  await findRecord({ model: Event, where, options });

export { findEvent };
