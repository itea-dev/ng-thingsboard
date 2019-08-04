import { AbstractControl } from '@angular/forms';

export class CustomValidators {

  static passwordMatchValidator(control: AbstractControl): void {
    const password = control.get('password').value;
    const confirmPassword = control.get('confirmPassword').value;

    if (password !== confirmPassword) {
      control.get('confirmPassword').setErrors({ NoPassswordMatch: true });
    }
  }

  static privacyPolicyCheckedValidator(control: AbstractControl): { [key: string]: boolean } | null {
    if (control.value !== undefined && control.value === false) {
      return { PrivacyPolicyNotAccepted: true };
    }

    return null;
  }

}
