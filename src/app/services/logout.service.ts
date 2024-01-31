import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogoutService {

  constructor() { }

  logout(): void {
    // Clear the authentication token from local storage
    localStorage.removeItem('JWT');
  }
}
