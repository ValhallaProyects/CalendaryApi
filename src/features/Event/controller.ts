import {
  Controller,
  Get,
  UseGuards,
  Request,
  UseFilters,
} from '@nestjs/common';

// $ Event stuff
import { EventService } from './service';
import { EventData } from './interfaces';
import { JwtAuthGuard } from '../Auth/guards/jwt-auth.guard';
import { HttpExceptionFilter } from 'src/helpers/httpExceptionFilter';

@UseGuards(JwtAuthGuard)
@UseFilters(new HttpExceptionFilter())
@Controller('event')
export class EventController {
  constructor(private EventService: EventService) {}

  @Get(':eventId')
  async getEvent(@Request() req): Promise<EventData> {
    return await this.EventService.getEvent(req.params.eventId);
  }
}
