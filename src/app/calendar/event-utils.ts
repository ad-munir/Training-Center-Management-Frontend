import { EventInput } from '@fullcalendar/core';

let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const myDate = new Date(2024, 0, 12).toISOString().replace(/T.*$/, '');
const myDate1 = new Date(2024, 1, 14).toISOString().replace(/T.*$/, '');
// Set the start time to the current time

export const INITIAL_EVENTS: EventInput[] = [
  {
    id: createEventId(),
    title: 'All-day event',
    start: TODAY_STR
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: TODAY_STR + 'T00:00:00',
    end: TODAY_STR + 'T03:00:00'
  },
  {
    id: createEventId(),
    title: 'abdolatif hello ',
    start: myDate + 'T11:00:00',
    end: myDate + 'T18:00:00'
  },
  {
    id: createEventId(),
    title: 'Timed event',
    start: myDate1 + 'T12:00:00',
    end: myDate1 + 'T15:00:00'
  },
  {
    id: createEventId(),
    title: 'hejj',
    start: myDate1 + 'T12:00:00',
    end: myDate1 + 'T15:00:00'
  }
];

export function createEventId() {
  return String(eventGuid++);
}
