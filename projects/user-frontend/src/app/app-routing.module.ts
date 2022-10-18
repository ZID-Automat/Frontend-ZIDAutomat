import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';

export enum UserFrontendRoutes {
  Login = 'login',
}

const routes: Routes = [
  { path: '', redirectTo: UserFrontendRoutes.Login, pathMatch: 'full' },
  { path: UserFrontendRoutes.Login, component: LoginPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
