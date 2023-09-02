import { Observable } from 'rxjs';
import {  AuthentificationService, UserLoginDto} from 'AutomatApi';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private authentificationService: AuthentificationService) {}

  login(LoginData:UserLoginDto) :Observable<string>{
    const UserLognOb: UserLoginDto = { username: LoginData.username, password: LoginData.password };
    //müsste eigentlich am Backend gemacht werden, hat aber keinen Einfluss. Diese Funktionalität ist nur bequemlichkeit.
    UserLognOb.username = UserLognOb.username?.split('@')[0].toUpperCase()
    return this.authentificationService.authentificationUserLoginPost$Json({body:UserLognOb});
  }
}
