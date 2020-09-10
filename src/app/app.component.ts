import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ValidateEmailNotTaken, ValidateUserNotTaken } from './validators/validate-email-not-taken';
import { SignupService } from './services/signup.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styles: [
    ` 
      form {
        border: 1px solid #999999;
        border-radius: 3px;
        margin: 10px;
        padding: 5%;
      }

      .error-message {
        color: red;
      }
    `
  ]
})
export class AppComponent implements OnInit  {
  signupForm: FormGroup;
  text = 'A';

  constructor(private fb: FormBuilder, private signupService: SignupService) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      name: ['', [Validators.required, Validators.maxLength(30)],
ValidateUserNotTaken.createValidator(this.signupService)],
      email: ['', [Validators.required, Validators.email],            ValidateEmailNotTaken.createValidator(this.signupService)]
    });


    this.signupForm.statusChanges.subscribe((x) => {
      this.text = this.signupForm.valid+'';
    });
  }

  get email() {
    return this.signupForm.get('email');
  }

  get name() {
    return this.signupForm.get('name');
  }

  onSubmit() {
    console.log(this.signupForm.value);
  }


}
