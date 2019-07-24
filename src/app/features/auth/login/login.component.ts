import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from '../../../core/services/auth/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  loginForm: FormGroup;
  hide: boolean;

  showSpinner: false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {
    this.hide = true;
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    });
  }

  login() {
    this.authService.login(this.loginForm.value).subscribe(
      () => {
        alert('loggedin')
        this.router.navigateByUrl('/home');
      }
    );
  }

  register() {
    this.authService.register(this.loginForm.value).subscribe(res => {
      // Log in the the new user automatically
      this.authService.login(this.loginForm.value).subscribe();
    });
  }

}
