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

import { LogQrCodeAdminDto } from '../models/log-qr-code-admin-dto';

@Injectable({
  providedIn: 'root',
})
export class AdminLogShowService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation adminLogShowInvalidItemsGet
   */
  static readonly AdminLogShowInvalidItemsGetPath = '/AdminLogShow/InvalidItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminLogShowInvalidItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowInvalidItemsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LogQrCodeAdminDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminLogShowService.AdminLogShowInvalidItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogQrCodeAdminDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminLogShowInvalidItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowInvalidItemsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<LogQrCodeAdminDto>> {

    return this.adminLogShowInvalidItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogQrCodeAdminDto>>) => r.body as Array<LogQrCodeAdminDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminLogShowInvalidItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowInvalidItemsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LogQrCodeAdminDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminLogShowService.AdminLogShowInvalidItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogQrCodeAdminDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminLogShowInvalidItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowInvalidItemsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<LogQrCodeAdminDto>> {

    return this.adminLogShowInvalidItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogQrCodeAdminDto>>) => r.body as Array<LogQrCodeAdminDto>)
    );
  }

  /**
   * Path part for operation adminLogShowScannedItemsGet
   */
  static readonly AdminLogShowScannedItemsGetPath = '/AdminLogShow/ScannedItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminLogShowScannedItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowScannedItemsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LogQrCodeAdminDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminLogShowService.AdminLogShowScannedItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogQrCodeAdminDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminLogShowScannedItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowScannedItemsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<LogQrCodeAdminDto>> {

    return this.adminLogShowScannedItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogQrCodeAdminDto>>) => r.body as Array<LogQrCodeAdminDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminLogShowScannedItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowScannedItemsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LogQrCodeAdminDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminLogShowService.AdminLogShowScannedItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogQrCodeAdminDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminLogShowScannedItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowScannedItemsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<LogQrCodeAdminDto>> {

    return this.adminLogShowScannedItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogQrCodeAdminDto>>) => r.body as Array<LogQrCodeAdminDto>)
    );
  }

  /**
   * Path part for operation adminLogShowEjectedItemsGet
   */
  static readonly AdminLogShowEjectedItemsGetPath = '/AdminLogShow/EjectedItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminLogShowEjectedItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowEjectedItemsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LogQrCodeAdminDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminLogShowService.AdminLogShowEjectedItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogQrCodeAdminDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminLogShowEjectedItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowEjectedItemsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<LogQrCodeAdminDto>> {

    return this.adminLogShowEjectedItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogQrCodeAdminDto>>) => r.body as Array<LogQrCodeAdminDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `adminLogShowEjectedItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowEjectedItemsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<LogQrCodeAdminDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AdminLogShowService.AdminLogShowEjectedItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<LogQrCodeAdminDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `adminLogShowEjectedItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  adminLogShowEjectedItemsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<LogQrCodeAdminDto>> {

    return this.adminLogShowEjectedItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<LogQrCodeAdminDto>>) => r.body as Array<LogQrCodeAdminDto>)
    );
  }

}
