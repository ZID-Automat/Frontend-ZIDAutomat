import { Observable } from 'rxjs';
import { AccountService,AdUser, UserLogin } from 'AutomatApi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private AccountService: AccountService) {}

  login(LoginData:UserLogin) :Observable<AdUser>{
    const UserLognOb: UserLogin = { username: LoginData.username, password: LoginData.password };
    return this.AccountService.accountLoginPost$Json({body:UserLognOb});
  }
}
