import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrainigCenterService {
   url_backend : String  = 'http://localhost:8080/'

  constructor( private http: HttpClient ) {}

  // login function, using for authenticating, called from login.component.ts
  login(loginRequest: any): Observable<any> {
    return this.http.post(this.url_backend + "authenticate", loginRequest)
  }
}
