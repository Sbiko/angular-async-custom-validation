import { AbstractControl } from '@angular/forms';
import { SignupService } from '../services/signup.service'; 
import { map } from 'rxjs/operators';
import { of } from 'rxjs';

export class ValidateEmailNotTaken {

  static createValidator(service: SignupService) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      return service.isTaken(value).pipe(
        map((result: boolean) => result ? ({ taken: true }) : null)
      )       
    }
  }
}

export class ValidateUserNotTaken {

  static createValidator(service: SignupService) {
    return (control: AbstractControl) => {
      const value = control.value as string;
      return service.isNameTaken(value).pipe(
        map((result: boolean) => result ? ({ taken: true }) : null)
      )       
    }
  }
}