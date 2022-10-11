import { IconDataService } from './Services/DataServices/icon-data-service';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './Components/Other/icon/icon.component';
import { TestComponent } from './test/test.component';

@NgModule({
  declarations: [
    TestComponent,
    IconComponent,
  ],
  imports: [
    HttpClientModule,
    FontAwesomeModule
  ],
  exports: [
    TestComponent,
    IconComponent,
    FontAwesomeModule
  ],
  providers: [
    HttpContext
  ]
})
export class AutomatSharedModule { }
