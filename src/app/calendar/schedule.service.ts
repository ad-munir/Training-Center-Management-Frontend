import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { EventInput } from '@fullcalendar/core';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  private apiUrl = 'https://jsonplaceholder.typicode.com/posts/1/comments';

  constructor(private http: HttpClient) {}

  getData(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }


}
