import { Email } from './../models/email.model';
import { ScheduleService } from './schedule.service';
import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import {signal, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';



let eventGuid = 0;
const TODAY_STR = new Date().toISOString().replace(/T.*$/, ''); // YYYY-MM-DD of today
const myDate = new Date(2024, 0, 12).toISOString().replace(/T.*$/, '');
const myDate1 = new Date(2025, 1, 14).toISOString().replace(/T.*$/, '');
// Set the start time to the current time

 let INITIAL_EVENTS: EventInput[] = [

  {
    id: createEventId(),
    title: 'abdolatif hello ',
    start: myDate + 'T11:00:00',
    end: myDate + 'T18:00:00'
  },
  {
    id: createEventId(),
    title: 'abdolatif hello ',
    start: myDate1 + 'T12:00:00',
    end: myDate1 + 'T18:00:00'
  }

]

let test:EventInput[];

export function createEventId() {
  return String(eventGuid++);
}
@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent implements OnInit {

  calendarVisible = signal(true);
  calendarOptions = signal<CalendarOptions>({
    plugins: [
      interactionPlugin,
      dayGridPlugin,
      timeGridPlugin,
      listPlugin,
    ],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    initialEvents: INITIAL_EVENTS, // alternatively, use the `events` setting to fetch from a feed
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    // select: this.handleDateSelect.bind(this),
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this)
    /* you can update a remote database when these fire:
    eventAdd:
    eventChange:
    eventRemove:
    */
  });
  currentEvents = signal<EventApi[]>([]);

  constructor(private changeDetector: ChangeDetectorRef,private ScheduleService: ScheduleService) {
  }
  INITIAL_EVENTS: EventInput[] = [];

  ngOnInit(): void {
    this.ScheduleService.getData().subscribe(data => {
      console.log(data);

      this.INITIAL_EVENTS = data.map((element: any) => ({
        id: element.id,
        title: element.name,
        start: myDate, // Update with the actual start date
        end: myDate,   // Update with the actual end date
      }));

      console.log(this.INITIAL_EVENTS);

      // Update the calendarOptions with the new data
      this.calendarOptions.update(options => ({
        ...options,
        initialEvents: this.INITIAL_EVENTS,
      }));

      console.log(this.calendarOptions);
      this.changeDetector.detectChanges();
    });
  }

  handleCalendarToggle() {
    this.calendarVisible.update((bool) => !bool);
  }

  handleWeekendsToggle() {
    this.calendarOptions.update((options) => ({
      ...options,
      weekends: !options.weekends,
    }));
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    const title = prompt('Please enter a new title for your event');
    const calendarApi = selectInfo.view.calendar;

    calendarApi.unselect(); // clear date selection

    if (title) {
      calendarApi.addEvent({
        id: createEventId(),
        title,
        start: selectInfo.startStr,
        end: selectInfo.endStr,
        allDay: selectInfo.allDay
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (confirm(`Are you sure you want to delete the event '${clickInfo.event.title}' or id '${clickInfo.event.id}'`)) {
      //Delete from database
      //post to delete with id
      clickInfo.event.remove();
    }

    alert(clickInfo.event.title)
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }

}
