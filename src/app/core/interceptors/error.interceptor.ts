import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { AuthService } from "../services/auth/auth.service";
import { Router } from '@angular/router';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      tap({
        error: err => {
          if (err.status === 401) {
            // Auto logout if api returns a 401 status
            this.authService.logout();
            this.router.navigateByUrl('login');
          }

          // Log error
          // console.error('ErrorInterceptor', err.error)
        }
      })
    );
  }
}
