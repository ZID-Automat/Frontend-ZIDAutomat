import { StatusPageComponent } from './Components/Pages/Status/status-page/status-page.component';
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/Login/login-page/login-page.component';
import { ItemPageComponent } from './Components/Pages/Item/item-page/item-page.component';
import { LogPageComponent } from './Components/Pages/Log/log-page/log-page.component';
import { LoginActivateGuard } from './Guards/login-activate.guard';
import { LoginDeactivateGuard } from './Guards/login-deactivate.guard';
import { BorrowsComponent } from './Components/Pages/borrows/borrows.component';
import { AutomatScannLogsComponent } from './Components/Pages/automat-scann-logs/automat-scann-logs.component';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { CategoriesComponent } from './Components/Pages/categories/categories.component';

export enum AdminFrontendRoutes {
  Login = 'login',
  Status = 'status',
  Item = 'items',
  Log = 'analytics',
  AutomatLog = 'AutomatLog',
  UserPage = 'UserPage',
  BorrowPage = 'BorrowPage',
  CategoryPage = 'CategoryPage',

  

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
    path: AdminFrontendRoutes.AutomatLog,
    component: AutomatScannLogsComponent,
  },
  {
    path: AdminFrontendRoutes.UserPage,
    component: UsersPageComponent,
  },
  {
    path: AdminFrontendRoutes.BorrowPage,
    component: BorrowsComponent
  },
  {
    path: AdminFrontendRoutes.CategoryPage,
    component: CategoriesComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
