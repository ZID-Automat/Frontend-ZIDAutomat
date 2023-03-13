import { StatusPageComponent } from './Components/Pages/Status/status-page/status-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/Login/login-page/login-page.component';
import { ItemPageComponent } from './Components/Pages/Item/item-page/item-page.component';

export enum AdminFrontendRoutes {
  Login = 'login',
  Status="status",
  Item="items"
}
const routes: Routes = [
//  { path: '', redirectTo: AdminFrontendRoutes.Login, pathMatch: 'full' },
  { path: AdminFrontendRoutes.Login, component:LoginPageComponent},
  {path:AdminFrontendRoutes.Status, component:StatusPageComponent},
  {path:AdminFrontendRoutes.Item, component:ItemPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
