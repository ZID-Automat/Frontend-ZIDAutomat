/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { BorrowAdminDetailedDto } from '../models/borrow-admin-detailed-dto';

@Injectable({
  providedIn: 'root',
})
export class ABorrowInfoService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation borrowDetailedGet
   */
  static readonly BorrowDetailedGetPath = '/BorrowDetailed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowDetailedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BorrowAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.BorrowDetailedGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `borrowDetailedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<BorrowAdminDetailedDto> {

    return this.borrowDetailedGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowAdminDetailedDto>) => r.body as BorrowAdminDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `borrowDetailedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BorrowAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.BorrowDetailedGetPath, 'get');
    if (params) {
      rb.query('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<BorrowAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `borrowDetailedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  borrowDetailedGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<BorrowAdminDetailedDto> {

    return this.borrowDetailedGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowAdminDetailedDto>) => r.body as BorrowAdminDetailedDto)
    );
  }

}
