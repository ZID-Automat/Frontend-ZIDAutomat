import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { LoginActivateGuard } from './Guards/login-activate.guard';

export enum UserFrontendRoutes {
  Login = 'login',
  Home='home',
  Admonition = 'admonition',
  History='history',
  ActiveQrCodes='activeQrCodes',
  Help = "help",
  ItemDetailed = "itemDetailed"
}

const routes: Routes = [
  { path: '', redirectTo: UserFrontendRoutes.Login, pathMatch: 'full' },
  { path: UserFrontendRoutes.Login, component: LoginPageComponent },
  { path: UserFrontendRoutes.Home, component: HomePageComponent, canActivate:[LoginActivateGuard] },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
