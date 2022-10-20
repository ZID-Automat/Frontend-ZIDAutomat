import { LoginFormComponent } from './Components/Pages/login-page/login-form/login-form.component';
import { AutomatSharedModule, MaterialModule } from 'AutomatShared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from 'AutomatApi';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    LoginFormComponent,
  ],
  imports: [
    AutomatSharedModule,
    ApiModule.forRoot({ rootUrl: "https://localhost:7141" }),
    BrowserModule,
    AppRoutingModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
