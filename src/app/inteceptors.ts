import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class Interceptor implements HttpInterceptor {
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (
      !request.url.includes('http://localhost:8080/api/v1/auth/authenticate')
    ) {
      const jwtToken = localStorage.getItem('JWT');

      if (jwtToken) {
        console.log(jwtToken);
        request = request.clone({
          headers: request.headers.set('Authorization', `Bearer ${jwtToken}`),
        });
      }
    }

    return next.handle(request);
  }
}
