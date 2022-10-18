import { take } from 'rxjs';
import { UserService } from './../../../../Services/user-service.service';
import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupName,
  Validators,
} from '@angular/forms';
import { UserLogin } from 'AutomatApi';

@Component({
  selector: 'user-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent implements OnInit {
  public LoginInfoForm: FormGroup = new FormGroup({
    username: new FormControl(
      '',
      Validators.compose([
        Validators.required,
      ])
    ),
    password: new FormControl(
      '',
      Validators.compose([
        Validators.required,
      ])
    ),
  });

  constructor(private userService: UserService) {}

  ngOnInit(): void {}

  Login() {
    if (this.LoginInfoForm.valid) {
      const loginData: UserLogin = this.LoginInfoForm.getRawValue();
      this.userService
        .login(loginData)
        .pipe(take(1))
        .subscribe((res) => {
          console.log(res);
        });
    }
  }


  getErrorMessage(formControl:AbstractControl|null|undefined, fieldname:string):string{
    if(formControl){
      if(formControl.hasError("required")){
        return fieldname+" is required"
      }
    }
    throw new Error("Formcontrol is null can't Validate content")
  }
}
