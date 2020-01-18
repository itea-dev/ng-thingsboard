import { Injectable } from '@angular/core';
import { environment as env } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const API_URL = env.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class AuthApiService {

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

    return this.httpClient.post<any>(`${API_URL}/auth/changePassword`, changePasswordRequest);
  }

  /**
   * Logout
   */
  public logout(): Observable<any> {
    return this.httpClient.post<any>(`${API_URL}/auth/logout`, null);
  }

  /**
   * Get user
   */
  public getUser(): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}/auth/user`);
  }

  /**
   * Activate User
   */
  public activateUser(activateRequest: string): Observable<any> {
    return this.httpClient.post<any>(`${API_URL}/noauth/activate`, activateRequest);
  }

  /**
   * Check activate token
   */
  public checkActivateToken(activateToken: string): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}/noauth/activate?activateToken=${activateToken}`);
  }

  /**
   * Reset password
   */
  public resetPassword(resetPasswordRequest: string): Observable<any> {
    return this.httpClient.post<any>(`${API_URL}/noauth/resetPassword`, resetPasswordRequest);
  }

  /**
   * Request reset password by email
   */
  public requestResetPasswordByEmail(resetPasswordByEmailRequest: string): Observable<any> {
    return this.httpClient.post<any>(`${API_URL}/noauth/resetPasswordByEmail`, resetPasswordByEmailRequest);
  }

  /**
   * Check reset token
   */
  public checkResetToken(resetToken: string): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}/noauth/resetPassword?resetToken=${resetToken}`);
  }

  /**
   * Get user password policy
   */
  public getUserPasswordPolicy(): Observable<any> {
    return this.httpClient.get<any>(`${API_URL}/noauth/userPasswordPolicy`);
  }

}
