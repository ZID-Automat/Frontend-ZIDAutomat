import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/Pages/login/login.component';

export enum UserFrontendRoutes {
  Login = 'login',
}

const routes: Routes = [
  { path: '', redirectTo: UserFrontendRoutes.Login, pathMatch: 'full' },
  { path: UserFrontendRoutes.Login, component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
