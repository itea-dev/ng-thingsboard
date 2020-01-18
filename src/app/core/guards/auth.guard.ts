import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(public authService: AuthService) { }

  canActivate(): boolean {
    if (this.authService.isAuthenticated()) {
      return true;
    }

    return false;
  }

}

