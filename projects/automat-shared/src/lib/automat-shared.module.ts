import { IconDataService } from './Services/DataServices/icon-data-service';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './Components/Other/icon/icon.component';

@NgModule({
  declarations: [
    IconComponent
  ],
  imports: [
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    IconComponent,
    FontAwesomeModule
  ],
  providers: [
    HttpContext
  ]
})
export class AutomatSharedModule { }
