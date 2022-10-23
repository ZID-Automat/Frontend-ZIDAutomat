import { JwtHelperService } from '@auth0/angular-jwt';
import { BehaviorSubject, take, takeWhile } from 'rxjs';
import { Component, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  FormGroupName,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import { UserLogin } from 'AutomatApi';
import { UserService } from 'projects/user-frontend/src/app/Services/user.service';
import { state, style, transition, trigger } from '@angular/animations';

export enum LoginErrors{
  PassUserWrong="Das Passwort oder der Username ist falsch"
}
@Component({
  selector: 'user-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.scss'],
  animations: [
    trigger('transitionMessages', [
        
        state('enter', style({ opacity: 1, transform: 'translateY(0%)' })),
        transition('void => enter', [
            style({ opacity: 0, transform: 'translateY(-100%)' }),
        ]),
    ])]
})
export class LoginFormComponent implements OnInit,OnDestroy {

  @Output() LoginEvent:EventEmitter<string>= new EventEmitter();

  public LoginInfoForm: FormGroup = new FormGroup({
    username: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
    ]),
    AGB: new FormControl(false, [Validators.requiredTrue]),
  });

  alive = true;

  public LoginError:BehaviorSubject<string | null> = new BehaviorSubject<string | null>(null);

  constructor(private userService: UserService) {}

  ngOnDestroy(): void {
    this.alive = false;
  }

  ngOnInit(): void {
    this.LoginEvent.pipe(takeWhile(()=>this.alive)).subscribe((res)=>{
      this.LoginInfoForm.reset();
      if(res){
        localStorage.setItem("jwt",res);
      }
      else{
        this.LoginError.next(LoginErrors.PassUserWrong)
      }
    });
  }

  Login() {
    if (this.LoginInfoForm.valid) {
      const loginData: UserLogin = this.LoginInfoForm.getRawValue();
      this.userService
        .login(loginData)
        .pipe(take(1))
        .subscribe((res) => {
          this.LoginEvent.emit(res);
        });
    }
  }

  getErrorMessage(
    formControl: AbstractControl | null | undefined,
    fieldname: string,
    isCheckbox: boolean = false
  ): string {
    if (formControl) {
      if (formControl.hasError('required')) {
        return !isCheckbox
          ? fieldname + ' ist ein Pflichfeld'
          : fieldname + ' müssen aktzeptiert werden';
      }
      if (formControl.hasError('maxlength')) {
        return fieldname + ' ist zu lang.';
      }
      if (formControl.hasError('minlength')) {
        return fieldname + ' ist zu kurz.';
      }
    }
    throw new Error("Formcontrol is null can't Validate content");
  }
}
