import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Trainer } from '../models/trainer.model';

@Injectable({
  providedIn: 'root'
})
export class TrainerService {
  private url_backend = 'http://localhost:8080/api/v1/';

  constructor(private http: HttpClient) {}

  getTrainer(): Observable<Trainer[]> {
    return this.http.get<Trainer[]>(this.url_backend + 'trainers');
  }

  addTrainer(formData: FormData): Observable<Trainer> {
    return this.http.post<Trainer>(`${this.url_backend}trainers`, formData);
  }

}
