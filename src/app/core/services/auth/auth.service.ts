import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';


const TOKEN_KEY = 'access_token';

export interface DecodedToken {
  customerId: string;
  enabled: boolean;
  exp: number;
  firstName: string;
  iat: number;
  isPublic: boolean;
  iss: string;
  lastName: string;
  privacyPolicyAccepted: boolean;
  scopes: string; // "TENANT_ADMIN"
  sub: string;
  tenantId: string;
  userId: string;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private url = environment.apiUrl;
  private decodedToken: DecodedToken = null;
  private authenticationState = new BehaviorSubject(false);

  constructor(
    private http: HttpClient,
    private helper: JwtHelperService
  ) {
    this.checkToken();
  }

  checkToken() {
    const token = localStorage.getItem(TOKEN_KEY);
    if (token) {
      const decoded = this.helper.decodeToken(token);
      const isExpired = this.helper.isTokenExpired(token);

      if (!isExpired) {
        this.decodedToken = decoded;
        this.authenticationState.next(true);
      } else {
        localStorage.removeItem(TOKEN_KEY);
      }
    }
  }

  register(credentials: any): Promise<any> {
    return new Promise<any>((resolve, reject) => {
      this.http.post(`${this.url}/noauth/signup`, credentials)
        .subscribe(
          res => {
            resolve(res);
          },
          e => {
            reject(e.error);
          }
        );
    });
  }

  login(credentials: { username: string, password: string }): Promise<DecodedToken | any> {
    return new Promise<void | any>((resolve, reject) => {
      this.http.post(`${this.url}/auth/login`, credentials)
        .subscribe(
          res => {
            localStorage.setItem(TOKEN_KEY, res['token']);
            this.decodedToken = this.helper.decodeToken(res['token']);
            this.authenticationState.next(true);
            resolve(this.decodedToken);
          },
          e => {
            reject(e.error);
          }
        );
    });
  }

  logout() {
    localStorage.removeItem(TOKEN_KEY);
    this.authenticationState.next(false);
  }

  isAuthenticated(): boolean {
    return this.authenticationState.value;
  }

  getAuthenticationState(): Observable<boolean> {
    return this.authenticationState.asObservable();
  }

}
