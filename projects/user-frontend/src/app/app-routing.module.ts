import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { LoginActivateGuard } from './Guards/login-activate.guard';
import { ActiveQrCodePageComponent } from './Components/Pages/active-qr-code-page/active-qr-code-page.component';
import { HistoryPageComponent } from './Components/Pages/history-page/history-page.component';
import { LoginDeactivateGuard } from './Guards/login-deactivate.guard';
import { HelpPageComponent } from './Components/Pages/help-page/help-page.component';
import { AgbsPageComponent} from './Components/Pages/agbs-page/agbs-page.component';

export enum UserFrontendRoutes {
  Login = 'login',
  Home='home',
  Admonition = 'admonition',
  History='history',
  ActiveQrCodes='activeQrCodes',
  Help = "help",
  Agbs = "agbs"
}

const routes: Routes = [
  { path: '', redirectTo: UserFrontendRoutes.Login, pathMatch: 'full' },
  { path: UserFrontendRoutes.Login, component: LoginPageComponent, canActivate:[LoginDeactivateGuard] },
  { path: UserFrontendRoutes.Home +"/:id", component: HomePageComponent, canActivate:[LoginActivateGuard] },
  { path: UserFrontendRoutes.Home, component: HomePageComponent, canActivate:[LoginActivateGuard] },
  { path: UserFrontendRoutes.ActiveQrCodes, component: ActiveQrCodePageComponent, canActivate:[LoginActivateGuard] },
  { path: UserFrontendRoutes.History, component: HistoryPageComponent, canActivate:[LoginActivateGuard] },
  { path: UserFrontendRoutes.Help, component: HelpPageComponent, canActivate:[LoginActivateGuard] },
  { path: UserFrontendRoutes.Agbs, component: AgbsPageComponent, canActivate:[LoginActivateGuard] },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
