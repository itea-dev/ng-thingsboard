import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';


const TOKEN_KEY = 'access_token';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = environment.apiUrl;
  user = null;
  authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService
  ) {
    this.checkToken();
    console.log(this.helper.isTokenExpired()); // true or false
  }

  checkToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      const decoded = this.helper.decodeToken(token);
      const isExpired = this.helper.isTokenExpired(token);

      if (!isExpired) {
        this.user = decoded;
        this.authenticationState.next(true);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
    }
  }

  register(credentials) {
    return this.http.post(`${this.url}/noauth/signup`, credentials).pipe(
      catchError(e => {
        console.error('Auth service register error: ' + e.error.msg);
        throw new Error(e);
      })
    );
  }

  login(credentials) {
    return this.http.post(`${this.url}/auth/login`, credentials)
      .pipe(
        tap(res => {
          localStorage.setItem(TOKEN_KEY, res['token']);
          this.user = this.helper.decodeToken(res['token']);
          this.authenticationState.next(true);
        }),
        catchError(e => {
          console.error('Auth service login error: ' + e.error.msg);
          throw new Error(e);
        })
      );
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.authenticationState.next(false);
  }

  getSpecialData() {
    return this.http.get<any>(`${this.url}/api/auth/login`);
  }

  isAuthenticated() {
    return this.authenticationState.value;
  }

}
