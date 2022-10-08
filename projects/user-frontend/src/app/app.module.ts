import { AutomatSharedModule } from 'AutomatShared';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApiModule } from 'AutomatApi';
import { TestComponentsComponent } from './components/test-components/test-components.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    ApiModule.forRoot({ rootUrl: "https://localhost:7141" }),
    BrowserModule,
    AppRoutingModule,
    AutomatSharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
