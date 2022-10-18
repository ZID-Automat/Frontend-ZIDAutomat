import { Observable } from 'rxjs';
import { AccountService, AuthenticationEnum, UserLogin } from 'AutomatApi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private AccountService: AccountService) {}

  login(LoginData:UserLogin) :Observable<AuthenticationEnum>{
    const UserLognOb: UserLogin = { username: LoginData.username, password: LoginData.password };
    return this.AccountService.accountLoginPost$Json({body:UserLognOb});
  }
}
