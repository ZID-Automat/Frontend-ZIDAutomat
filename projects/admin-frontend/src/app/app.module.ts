import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AutomatSharedModule, MaterialModule } from 'AutomatShared';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatFormFieldControl,
  MatFormFieldModule,
} from '@angular/material/form-field';
import { LoginPageComponent } from './Components/Pages/Login/login-page/login-page.component';
import { NavBarComponent } from './Components/Dummy/nav-bar/nav-bar.component';
import { StatusPageComponent } from './Components/Pages/Status/status-page/status-page.component';
import { ItemPageComponent } from './Components/Pages/Item/item-page/item-page.component';
import { AutomatViewComponent } from './Components/Dummy/automat-view/automat-view.component';
import { ItemManComponent } from './Components/Dummy/item-man/item-man.component';
import { AddItemDialogComponent } from './Components/Dialogs/add-item-dialog/add-item-dialog.component';
import { ViewItemDialogComponent } from './Components/Dialogs/view-item-dialog/view-item-dialog.component';
import { LogPageComponent } from './Components/Pages/Log/log-page/log-page.component';
import { LogViewComponent } from './Components/Dummy/log-view/log-view.component';
import { AutomatScannLogsComponent } from './Components/Pages/automat-scann-logs/automat-scann-logs.component';
import { LogAutomat2Component } from './Components/Dummy/log-automat2/log-automat2.component';
import { UsersPageComponent } from './Components/Pages/users-page/users-page.component';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { ApiModule } from 'AutomatApi';
import { environment } from '../environments/environment';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { JwtModule } from '@auth0/angular-jwt';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    NavBarComponent,
    StatusPageComponent,
    ItemPageComponent,
    AutomatViewComponent,
    ItemManComponent,
    AddItemDialogComponent,
    ViewItemDialogComponent,
    LogPageComponent,
    LogViewComponent,
    AutomatScannLogsComponent,
    LogAutomat2Component,
    UsersPageComponent,
  ],
  imports: [
    AutomatSharedModule,
    ApiModule.forRoot({ rootUrl: environment.backendUrl }),
    BrowserModule,
    AppRoutingModule,
    MaterialModule,

    JwtModule.forRoot({
      config: {
        tokenGetter:()=>localStorage.getItem("jwt"),
        allowedDomains: [environment.backendUrl.split(/\/\//)[1]],
        disallowedRoutes: [environment.backendUrl+"/Authentification/"],
        throwNoTokenError: false,
        skipWhenExpired: true
      },
    }),
    NgxDatatableModule
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
