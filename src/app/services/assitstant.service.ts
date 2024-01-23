import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Assistant } from '../models/assistant.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AsststantService {
  private url_backend = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}

  getAssistants(): Observable<Assistant[]> {
    return this.http.get<Assistant[]>(this.url_backend + 'assistants');
  }


  getAssistantById(assistantId: string): Observable<Assistant> {
    return this.http.get<Assistant>(this.url_backend + 'assistants/' + assistantId);
  }


  addAssistant(formData: FormData): Observable<Assistant> {
    return this.http.post<Assistant>(`${this.url_backend}assistants`, formData);
  }

}
