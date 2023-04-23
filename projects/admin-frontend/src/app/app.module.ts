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
  ],
  imports: [
    AutomatSharedModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    DragDropModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
