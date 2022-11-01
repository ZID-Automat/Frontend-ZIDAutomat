import { IconDataService } from './Services/DataServices/icon-data-service';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './Components/Other/icon/icon.component';
import { IconButtonComponent } from './Components/Form/icon-button/icon-button.component';
import { MaterialModule } from './MaterialModule/material.module';

@NgModule({
  declarations: [
    IconComponent,
    IconButtonComponent
  ],
  imports: [
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule
  ],
  exports: [
    IconComponent,
    FontAwesomeModule,
    IconButtonComponent
  ],
  providers: [
    HttpContext
  ]
})
export class AutomatSharedModule { }
