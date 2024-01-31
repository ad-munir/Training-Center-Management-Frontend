import { Component, OnInit } from '@angular/core';
import { Calendar, EventInput } from '@fullcalendar/core';
import { signal, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarService } from 'src/app/services/calendar.service';
import { Schedule } from 'src/app/models/schedule.model';


let eventGuid = 0;

export function createEventId() {
  return String(eventGuid++);
}

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})


export class CalendarComponent implements OnInit {

  events: Schedule[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    // initialView: 'timeGridWeek',

    events: [],
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventsSet: this.handleEvents.bind(this),
  };


  calendarVisible = signal(true);


  scheduleEvents: EventInput[] = [];


  currentEvents = signal<EventApi[]>([]);

  constructor(
    private changeDetector: ChangeDetectorRef,
    private calendarService: CalendarService
  ) {}


  ngOnInit(): void {
    console.log(this.calendarOptions);

    this.calendarService.getSchedules().subscribe((data) => {
      console.log("events : ", data);

      this.events = data;


      this.calendarOptions.events = this.events.map(event => ({
          title: event.course.title,
          start: new Date(event.startDate),
          end: new Date(event.endDate),
        }));


      // Move change detection to the end of the subscription block
      this.changeDetector.detectChanges();
    });
  }


  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
}
