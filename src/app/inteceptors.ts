import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

@Injectable()
export class Interceptor implements HttpInterceptor {

  constructor( private router: Router) {}

  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {


    if ( !request.url.includes('http://localhost:8080/api/v1/auth/authenticate') ) {

      const jwtToken = localStorage.getItem('JWT');

      if (jwtToken) {
        request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${jwtToken}`),
        });
      }
    }

    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.router.navigate(['/login']); 
        }
        return throwError(error);
      })
    );
  }
}
