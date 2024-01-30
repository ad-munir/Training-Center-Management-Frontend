import { Component, OnInit } from '@angular/core';
import { EventInput } from '@fullcalendar/core';
import { signal, ChangeDetectorRef } from '@angular/core';
import { CalendarOptions, DateSelectArg, EventClickArg, EventApi } from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarService } from 'src/app/services/calendar.service';
import { Schedule } from 'src/app/models/schedule.model';


export interface Event {
  id: string,
  title: string,
  start: Date,
  end: Date
}


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

  calendarVisible = signal(true);


  scheduleEvents: EventInput[] = [];


  calendarOptions = signal<CalendarOptions>({
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    initialEvents: this.scheduleEvents,
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    eventClick: this.handleEventClick.bind(this),
    eventsSet: this.handleEvents.bind(this),
  });

  currentEvents = signal<EventApi[]>([]);

  constructor(
    private changeDetector: ChangeDetectorRef,
    private calendarService: CalendarService
  ) {}


  ngOnInit(): void {
    this.calendarService.getSchedules().subscribe((data) => {
      console.log("fetching data ------- ", data);
  
      // Transform the fetched data into FullCalendar events
      // this.scheduleEvents = data.map(schedule => ({
      //   id: String(schedule.course.id),  
      //   title: schedule.course.title,
      //   start: schedule.startDate,
      //   end: schedule.endDate,
      // }));

      
      this.scheduleEvents = [
        {
          id: '1',
          title: 'Manual Event',
          start: '2024-01-27T10:00:00',
          end: '2024-01-27T12:00:00',
        },
      ];

  
      // Update the calendarOptions with the new data
      this.calendarOptions.update(options => ({
        ...options,
        initialEvents: this.scheduleEvents,
      }));

  
      // Move change detection to the end of the subscription block
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
        allDay: selectInfo.allDay,
      });
    }
  }

  handleEventClick(clickInfo: EventClickArg) {
    if (
      confirm(
        `Are you sure you want to delete the event '${clickInfo.event.title}' or id '${clickInfo.event.id}'`
      )
    ) {
      //Delete from database
      //post to delete with id
      clickInfo.event.remove();
    }

    alert(clickInfo.event.title);
  }

  handleEvents(events: EventApi[]) {
    this.currentEvents.set(events);
    this.changeDetector.detectChanges(); // workaround for pressionChangedAfterItHasBeenCheckedError
  }
}
