import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventInput } from '@fullcalendar/core';
import { Course } from '../models/course.model';
import { Schedule } from '../models/schedule.model';
@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private url_backend = 'http://localhost:8080/api/v1/';


  constructor(private http: HttpClient) {}


  getSchedules():Observable<any[]> {
    return this.http.get<any[]>(this.url_backend + 'schedules');
  }

  saveSchedule(schedule:  any): Observable<any> {
    return this.http.post<any>(`${this.url_backend}schedules`, schedule);
  }


}
