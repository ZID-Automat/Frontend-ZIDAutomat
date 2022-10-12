import { AutomatSharedModule, MaterialModule } from 'AutomatShared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from 'AutomatApi';
import { LoginComponent } from './Components/Pages/login/login.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NavBarComponent,
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
