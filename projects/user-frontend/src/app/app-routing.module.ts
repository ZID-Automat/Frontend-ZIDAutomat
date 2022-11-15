import { ItemDetailedPageComponent } from './Components/Pages/item-detailed-page/item-detailed-page.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';

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
  { path: UserFrontendRoutes.Home, component: HomePageComponent },
  { path: UserFrontendRoutes.ItemDetailed+"/:id", component: ItemDetailedPageComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
