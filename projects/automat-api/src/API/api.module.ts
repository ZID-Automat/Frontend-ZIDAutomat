/* tslint:disable */
/* eslint-disable */
import { NgModule, ModuleWithProviders, SkipSelf, Optional } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiConfiguration, ApiConfigurationParams } from './api-configuration';

import { AAnalyticsService } from './services/a-analytics.service';
import { ABorrowInfoService } from './services/a-borrow-info.service';
import { AConfCategoriesService } from './services/a-conf-categories.service';
import { AdminLogShowService } from './services/admin-log-show.service';
import { AItemService } from './services/a-item.service';
import { AUserInforService } from './services/a-user-infor.service';
import { AuthentificationService } from './services/authentification.service';
import { CBorrowService } from './services/c-borrow.service';
import { DebugService } from './services/debug.service';
import { UBorrowService } from './services/u-borrow.service';
import { UItemService } from './services/u-item.service';
import { UQrCodeService } from './services/u-qr-code.service';

/**
 * Module that provides all services and configuration.
 */
@NgModule({
  imports: [],
  exports: [],
  declarations: [],
  providers: [
    AAnalyticsService,
    ABorrowInfoService,
    AConfCategoriesService,
    AdminLogShowService,
    AItemService,
    AUserInforService,
    AuthentificationService,
    CBorrowService,
    DebugService,
    UBorrowService,
    UItemService,
    UQrCodeService,
    ApiConfiguration
  ],
})
export class ApiModule {
  static forRoot(params: ApiConfigurationParams): ModuleWithProviders<ApiModule> {
    return {
      ngModule: ApiModule,
      providers: [
        {
          provide: ApiConfiguration,
          useValue: params
        }
      ]
    }
  }

  constructor( 
    @Optional() @SkipSelf() parentModule: ApiModule,
    @Optional() http: HttpClient
  ) {
    if (parentModule) {
      throw new Error('ApiModule is already loaded. Import in your base AppModule only.');
    }
    if (!http) {
      throw new Error('You need to import the HttpClientModule in your AppModule! \n' +
      'See also https://github.com/angular/angular/issues/20575');
    }
  }
}
