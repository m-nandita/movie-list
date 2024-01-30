import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor(private authService: AuthService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

    const isAPIurl = request.url.startsWith('http://localhost:8081')
    if(this.authService.tokenValue() && isAPIurl) {
      request = request.clone(
        { setHeaders: { Authorization: `Bearer ${JSON.stringify(this.authService.tokenValue())}`}}
      )
    }
    return next.handle(request);
  }
}
