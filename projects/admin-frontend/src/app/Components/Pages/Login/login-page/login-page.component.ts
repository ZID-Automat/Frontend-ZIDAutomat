import { BehaviorSubject, catchError } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthentificationService } from 'AutomatApi';
import { Router } from '@angular/router';
import { AdminFrontendRoutes } from 'projects/admin-frontend/src/app/app-routing.module';

@Component({
  selector: 'admin-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss'],
})
export class LoginPageComponent implements OnInit {
  constructor(
    public authentificationService: AuthentificationService,
    public router: Router
  ) {}

  ngOnInit(): void {}

  public loginForm: FormGroup = new FormGroup({
    hall: new FormControl('', [
      Validators.required,
      Validators.maxLength(50),
      Validators.minLength(4),
    ]),
  });

  public loginError: BehaviorSubject<string | null> = new BehaviorSubject<
    string | null
  >(null);

  public login() {
    console.log('Login');

    this.authentificationService
      .authentificationAdminLoginPost$Json({
        body: { hall: this.loginForm.get('hall')?.value },
      })
      .pipe(
        catchError((err) => {
          this.loginError.next('Hall ist falsch');
          throw '';
        })
      )
      .subscribe((res) => {
        this.loginForm.reset();
        if (res) {
          localStorage.setItem('jwt', res);
          this.router.navigate([AdminFrontendRoutes.Item]);
        }
      });
  }
}
