import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { LoginActivateGuard } from './Guards/login-activate.guard';
import { ActiveQrCodePageComponent } from './Components/Pages/active-qr-code-page/active-qr-code-page.component';
import { HistoryPageComponent } from './Components/Pages/history-page/history-page.component';

export enum UserFrontendRoutes {
  Login = 'login',
  Home='home',
  Admonition = 'admonition',
  History='history',
  ActiveQrCodes='activeQrCodes',
  Help = "help",
}

const routes: Routes = [
  { path: '', redirectTo: UserFrontendRoutes.Login, pathMatch: 'full' },
  { path: UserFrontendRoutes.Login, component: LoginPageComponent },
  { path: UserFrontendRoutes.Home, component: HomePageComponent, canActivate:[LoginActivateGuard] },
  { path: UserFrontendRoutes.ActiveQrCodes, component: ActiveQrCodePageComponent, canActivate:[LoginActivateGuard] },
  { path: UserFrontendRoutes.History, component: HistoryPageComponent, canActivate:[LoginActivateGuard] },


];

@NgModule({
    
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
