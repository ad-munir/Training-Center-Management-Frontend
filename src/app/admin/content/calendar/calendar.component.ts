import { Component, OnInit } from '@angular/core';
import { Calendar, EventInput } from '@fullcalendar/core';
import { signal, ChangeDetectorRef } from '@angular/core';
import {
  CalendarOptions,
  DateSelectArg,
  EventClickArg,
  EventApi,
} from '@fullcalendar/core';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import timeGridPlugin from '@fullcalendar/timegrid';
import listPlugin from '@fullcalendar/list';
import { CalendarService } from 'src/app/services/calendar.service';
import { PlanningModalComponent } from '../planning-modal/planning-modal.component';
import { MatDialog } from '@angular/material/dialog';
import { ScheduleOut } from 'src/app/models/schedule.model';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
})
export class CalendarComponent implements OnInit {
  constructor(
    private calendarService: CalendarService,
    private dialog: MatDialog
  ) {}

  events: ScheduleOut[] = [];

  calendarOptions: CalendarOptions = {
    plugins: [interactionPlugin, dayGridPlugin, timeGridPlugin, listPlugin],
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek',
    },
    initialView: 'dayGridMonth',
    events: [],
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    select: this.handleDateSelect.bind(this),
  };

  ngOnInit(): void {
    this.calendarService.getSchedules().subscribe((data) => {
      console.log('data : ', data);

      this.events = data;

      this.calendarOptions.events = this.events.map((event) => ({
        title: event.title ,
        start: new Date(event.startDate),
        end: new Date(event.endDate),
      }));
    });
  }

  handleDateSelect(selectInfo: DateSelectArg) {
    console.log(selectInfo);
    console.log('Selection Start: ' + selectInfo.startStr);
    console.log('Selection End: ' + selectInfo.endStr);

    const dialogRef = this.dialog.open(PlanningModalComponent, {
      width: '400px',

      data: {
        start: selectInfo.startStr,
        end: selectInfo.endStr,
      },
    });
  }

}
