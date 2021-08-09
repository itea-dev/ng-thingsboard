import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidationErrors } from '@angular/forms';
import { AuthService } from 'src/app/core/services/auth/auth.service';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CustomValidators } from 'src/app/validators/CustomValidators';
import { SignupRequest } from './signup-request.model';


@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  registrationForm!: FormGroup;
  hidePassword = true;
  isLoading = false;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private matSnackBar: MatSnackBar
  ) { }

  ngOnInit() {
    this.registrationForm = this.createForm();
  }

  createForm(): FormGroup {
    return this.registrationForm = this.formBuilder.group(
      {
        firstName: ['', Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])],
        lastName: ['', Validators.compose([
          Validators.required,
          Validators.minLength(4)
        ])],
        email: ['', Validators.compose([
          Validators.required,
          Validators.email
        ])],
        password: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
        confirmPassword: ['', Validators.compose([
          Validators.required,
          Validators.minLength(6)
        ])],
        recaptchaResponse: ['ToDo', Validators.compose([
          Validators.required
        ])],
        acceptPrivacyPolicy: ['', Validators.compose([
          Validators.required,
          CustomValidators.privacyPolicyCheckedValidator
        ])]
      },
      {
        validator: CustomValidators.passwordMatchValidator
      }
    );
  }

  get passwordMatch(): boolean {
    if (this.registrationForm.get('confirmPassword')!.errors) {
      return this.registrationForm.get('confirmPassword')!.errors!.NoPassswordMatch;
    }

   return false;
  }

  register() {
    this.isLoading = true;

    const registrationFormValue = Object.assign({}, this.registrationForm.value);

    const signupRequest: SignupRequest = {
      firstName: registrationFormValue.firstName,
      lastName: registrationFormValue.lastName,
      email: registrationFormValue.email,
      password: registrationFormValue.password,
      recaptchaResponse: registrationFormValue.recaptchaResponse
    };

    this.authService.register(signupRequest)
      .then(
        () => {
          this.authService.login({
            username: registrationFormValue.email,
            password: registrationFormValue.password
          })
            .then(
              () => {
                this.isLoading = false;
                this.router.navigateByUrl('/home');
              }
            )
            .catch(
              (error) => {
                this.isLoading = false;

                this.matSnackBar.open(error.message, 'Close', {
                  duration: 10000,
                  horizontalPosition: 'end',
                  verticalPosition: 'top'
                });
              }
            );
        }
      )
      .catch(
        (error) => {
          this.isLoading = false;

          this.matSnackBar.open(error.message, 'Close', {
            duration: 10000,
            horizontalPosition: 'end',
            verticalPosition: 'top'
          });
        }
      );
  }

}
