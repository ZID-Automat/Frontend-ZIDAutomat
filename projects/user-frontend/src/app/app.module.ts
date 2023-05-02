import { QRCodeModule } from 'angularx-qrcode';
import { LoginFormComponent } from './Components/Pages/login-page/login-form/login-form.component';
import { AutomatSharedModule, MaterialModule } from 'AutomatShared';
import { LOCALE_ID, NgModule } from '@angular/core';
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
import { AdmonitionPageComponent } from './Components/Pages/admonition-page/admonition-page.component';
import { HistoryPageComponent } from './Components/Pages/history-page/history-page.component';
import { ActiveQrCodePageComponent } from './Components/Pages/active-qr-code-page/active-qr-code-page.component';
import { HelpPageComponent } from './Components/Pages/help-page/help-page.component';
import { ItemDetailedComponent } from './Components/Dialogs/item-detailed-dialog/item-detailed/item-detailed.component';
import { ItemDetailedFormComponent } from './Components/Dialogs/item-detailed-dialog/item-detailed/item-detailed-form/item-detailed-form.component';
import { ItemImageComponent } from './Components/Dialogs/item-detailed-dialog/item-detailed/item-image/item-image.component';
import { ItemDetailedDialogComponent } from './Components/Dialogs/item-detailed-dialog/item-detailed.dialog';
import { BorrowDisplayComponent } from './Components/Dummy/borrow-display/borrow-display.component';
import { QrcodeDialogComponent } from './Components/Dialogs/qrcode-dialog/qrcode-dialog.component';
import { QrcodeComponent } from './Components/Dialogs/qrcode-dialog/qrcode/qrcode.component';
import { environment } from '../environments/environment';
import { ItemCardDeckMobileComponent } from './Components/Pages/home-page/item-card-deck-mobile/item-card-deck-mobile.component';
@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    LoginPageComponent,
    LoginFormComponent,
    HomePageComponent,
    ItemCardComponent,
    ItemCardDeckComponent,
    AdmonitionPageComponent,
    HistoryPageComponent,
    ActiveQrCodePageComponent,
    HelpPageComponent,
    ItemDetailedDialogComponent,
    ItemDetailedComponent,
    ItemDetailedFormComponent,
    ItemImageComponent,
    BorrowDisplayComponent,
    QrcodeDialogComponent,
    QrcodeComponent,
    ItemCardDeckMobileComponent
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

    QRCodeModule,
  ],
  providers: [   
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }


