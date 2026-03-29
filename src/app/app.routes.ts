import { Routes } from '@angular/router';
import { ScheduleEvent } from './components/schedule-event/schedule-event';
import { RsvpForm } from './components/rsvp-form/rsvp-form';
import { EventList } from './components/event-list/event-list';

export const routes: Routes = [
  { path: '', redirectTo: '/events', pathMatch: 'full'},
  { path: 'events', component: EventList },
  { path: 'schedule', component: ScheduleEvent },
  { path: 'rsvp', component: RsvpForm },
  { path: 'rsvp/:id', component: RsvpForm }

];
