import { LoginFormComponent } from './Components/Pages/login-page/login-form/login-form.component';
import { AutomatSharedModule, MaterialModule } from 'AutomatShared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './Components/nav-bar/nav-bar.component';
import { LoginPageComponent } from './Components/Pages/login-page/login-page.component';
import { HomePageComponent } from './Components/Pages/home-page/home-page.component';
import { ApiModule } from 'AutomatApi';
import { JwtModule } from '@auth0/angular-jwt';
import { ItemCardComponent } from './Components/Pages/home-page/item-card-deck/item-card/item-card.component';
import { ItemCardDeckComponent } from './Components/Pages/home-page/item-card-deck/item-card-deck.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    LoginFormComponent,
    HomePageComponent,
    ItemCardComponent,
    ItemCardDeckComponent
  ],
  imports: [
    AutomatSharedModule,
    ApiModule.forRoot({ rootUrl: "https://localhost:7141" }),
    BrowserModule,
    AppRoutingModule,
    MaterialModule,

    JwtModule.forRoot({
      config: {
        tokenGetter:()=>localStorage.getItem("jwt"),
        allowedDomains: ["localhost:7141"],
        disallowedRoutes: ["https://localhost:7141/Authentification/"],
        throwNoTokenError: true,
        skipWhenExpired: true
      },
    }),
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
