import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

  private apiUril = environment.apiUrl;

  constructor(
    protected httpClient: HttpClient
  ) { }

  /**
   * Change password
   */
  public changePassword(changePasswordRequest: ChangePasswordRequest): Observable<void> {
    if (changePasswordRequest === null || changePasswordRequest === undefined) {
      throw Error('Required parameter changePasswordRequest was null or undefined when calling changePassword.');
    }

    return this.httpClient.post<any>(`${this.apiUril}/auth/changePassword`, changePasswordRequest);
  }

  /**
   * Logout
   */
  public logout(): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUril}/auth/logout`, null);
  }

  /**
   * Get user
   */
  public getUser(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUril}/auth/user`);
  }

  /**
   * Activate User
   */
  public activateUser(activateRequest: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUril}/noauth/activate`, activateRequest);
  }

  /**
   * Check activate token
   */
  public checkActivateToken(activateToken: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUril}/noauth/activate?activateToken=${activateToken}`);
  }

  /**
   * Reset password
   */
  public resetPassword(resetPasswordRequest: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUril}/noauth/resetPassword`, resetPasswordRequest);
  }

  /**
   * Request reset password by email
   */
  public requestResetPasswordByEmail(resetPasswordByEmailRequest: string): Observable<any> {
    return this.httpClient.post<any>(`${this.apiUril}/noauth/resetPasswordByEmail`, resetPasswordByEmailRequest);
  }

  /**
   * Check reset token
   */
  public checkResetToken(resetToken: string): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUril}/noauth/resetPassword?resetToken=${resetToken}`);
  }

  /**
   * Get user password policy
   */
  public getUserPasswordPolicy(): Observable<any> {
    return this.httpClient.get<any>(`${this.apiUril}/noauth/userPasswordPolicy`);
  }

}
