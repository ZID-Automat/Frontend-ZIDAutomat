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
    return this.authentificationService.authentificationLoginPost$Json({body:UserLognOb});
  }
}
