import { StatusPageComponent } from './Components/Pages/Status/status-page/status-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/Login/login-page/login-page.component';
import { ItemPageComponent } from './Components/Pages/Item/item-page/item-page.component';
import { LogPageComponent } from './Components/Pages/Log/log-page/log-page.component';
import { BorrowedPageComponent } from './Components/Pages/Borrowed/borrowed-page/borrowed-page.component';
import { LoginActivateGuard } from './Guards/login-activate.guard';
import { LoginDeactivateGuard } from './Guards/login-deactivate.guard';

export enum AdminFrontendRoutes {
  Login = 'login',
  Status = 'status',
  Item = 'items',
  Log = 'log',
  Borrowed = 'borrowed',
}
const routes: Routes = [
  { path: '', redirectTo: AdminFrontendRoutes.Login, pathMatch: 'full' },
  {
    path: AdminFrontendRoutes.Login,
    component: LoginPageComponent,
    // canActivate: [LoginDeactivateGuard],
  },
  {
    path: AdminFrontendRoutes.Status,
    component: StatusPageComponent,
    // canActivate: [LoginActivateGuard],
  },
  {
    path: AdminFrontendRoutes.Item,
    component: ItemPageComponent,
    // canActivate: [LoginActivateGuard],
  },
  {
    path: AdminFrontendRoutes.Log,
    component: LogPageComponent,
    // canActivate: [LoginActivateGuard],
  },
  {
    path: AdminFrontendRoutes.Borrowed,
    component: BorrowedPageComponent,
    // canActivate: [LoginActivateGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
