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

import { UserAdminGetAll } from '../models/user-admin-get-all';

@Injectable({
  providedIn: 'root',
})
export class AUserInforService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation aUserInforUserGet
   */
  static readonly AUserInforUserGetPath = '/AUserInfor/User';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aUserInforUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforUserGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdminGetAll>>> {

    const rb = new RequestBuilder(this.rootUrl, AUserInforService.AUserInforUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdminGetAll>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aUserInforUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforUserGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdminGetAll>> {

    return this.aUserInforUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdminGetAll>>) => r.body as Array<UserAdminGetAll>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aUserInforUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforUserGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdminGetAll>>> {

    const rb = new RequestBuilder(this.rootUrl, AUserInforService.AUserInforUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdminGetAll>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aUserInforUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforUserGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdminGetAll>> {

    return this.aUserInforUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdminGetAll>>) => r.body as Array<UserAdminGetAll>)
    );
  }

}
