import { Observable } from 'rxjs';
import {  AuthentificationService, UserLogin,UserService as US } from 'AutomatApi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private authentificationService: AuthentificationService, private US:US) {}

  login(LoginData:UserLogin) :Observable<string>{
    const UserLognOb: UserLogin = { username: LoginData.username, password: LoginData.password };
    return this.authentificationService.authentificationLoginPost$Json({body:UserLognOb});
  }

  borrow(): Observable<boolean> {
    return this.US.userBorrowPost$Json();
  }
}
