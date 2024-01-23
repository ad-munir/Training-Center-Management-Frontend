import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Participant } from '../models/participant.model';
import { FormGroup } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class ParticipantService {

  private url_backend = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}

  getParticipants(): Observable<Participant[]> {
    return this.http.get<Participant[]>(this.url_backend + 'participants');
  }

  addParticipant(participants: Participant): Observable<Participant> {
    return this.http.post<Participant>(`${this.url_backend}participants`, participants);
  }
}
