import { AddNDaysPipe } from './Pipes/DataPipes/add-ndays.pipe';
import { IsExpiredPipe } from './Pipes/DataPipes/is-expired.pipe';
import { IconDataService } from './Services/DataServices/icon-data-service';
import { HttpClientModule, HttpContext } from '@angular/common/http';
import { DEFAULT_CURRENCY_CODE, LOCALE_ID, NgModule } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { IconComponent } from './Components/Other/icon/icon.component';
import { IconButtonComponent } from './Components/Form/icon-button/icon-button.component';
import { MaterialModule } from './MaterialModule/material.module';
import { FormButtonComponent } from './Components/Form/form-button/form-button.component';
import { MonthlyBorrowedLineGraphComponent } from './monthly-borrowed-line-graph/monthly-borrowed-line-graph.component';

@NgModule({
  declarations: [
    IconComponent,
    IconButtonComponent,
    FormButtonComponent,
    IsExpiredPipe,
    AddNDaysPipe,
    MonthlyBorrowedLineGraphComponent,
  ],
  imports: [
    HttpClientModule,
    FontAwesomeModule,
    MaterialModule,
  ],
  exports: [
    IconComponent,
    FontAwesomeModule,
    IconButtonComponent,
    FormButtonComponent,
    IsExpiredPipe,
    AddNDaysPipe,
  ],
  providers: [
    HttpContext,
    {
      provide: DEFAULT_CURRENCY_CODE,
      useValue: 'EUR'
    }    
  ]
})
export class AutomatSharedModule { }
