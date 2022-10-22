import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';

export enum UserFrontendRoutes {
  Login = 'login',
  Home='home'
}

const routes: Routes = [
  { path: '', redirectTo: UserFrontendRoutes.Login, pathMatch: 'full' },
  { path: UserFrontendRoutes.Login, component: LoginPageComponent },
  { path: UserFrontendRoutes.Home, component: HomePageComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}