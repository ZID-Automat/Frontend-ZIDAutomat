import { StatusPageComponent } from './Components/Pages/Status/status-page/status-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/Login/login-page/login-page.component';
import { ItemPageComponent } from './Components/Pages/Item/item-page/item-page.component';
import { LoginActivateGuard } from './Guards/login-activate.guard';
import { LoginDeactivateGuard } from './Guards/login-deactivate.guard';


export enum AdminFrontendRoutes {
  Login = 'login',
  Status="status",
  Item="items"
}
const routes: Routes = [
//  { path: '', redirectTo: AdminFrontendRoutes.Login, pathMatch: 'full' },
  { path: AdminFrontendRoutes.Login, component: LoginPageComponent, canActivate:[LoginDeactivateGuard] },
  {path:AdminFrontendRoutes.Status, component:StatusPageComponent, canActivate:[LoginActivateGuard]},
  {path:AdminFrontendRoutes.Item, component:ItemPageComponent,canActivate:[LoginActivateGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
