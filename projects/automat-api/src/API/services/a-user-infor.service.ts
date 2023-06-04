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

import { BlockiertStateDto } from '../models/blockiert-state-dto';
import { UserAdminDetailedDto } from '../models/user-admin-detailed-dto';
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
   * Path part for operation aUserInforGetAllUsersGet
   */
  static readonly AUserInforGetAllUsersGetPath = '/AUserInfor/GetAllUsers';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aUserInforGetAllUsersGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforGetAllUsersGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdminGetAll>>> {

    const rb = new RequestBuilder(this.rootUrl, AUserInforService.AUserInforGetAllUsersGetPath, 'get');
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
   * To access the full response (for headers, for example), `aUserInforGetAllUsersGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforGetAllUsersGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdminGetAll>> {

    return this.aUserInforGetAllUsersGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdminGetAll>>) => r.body as Array<UserAdminGetAll>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aUserInforGetAllUsersGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforGetAllUsersGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdminGetAll>>> {

    const rb = new RequestBuilder(this.rootUrl, AUserInforService.AUserInforGetAllUsersGetPath, 'get');
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
   * To access the full response (for headers, for example), `aUserInforGetAllUsersGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforGetAllUsersGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdminGetAll>> {

    return this.aUserInforGetAllUsersGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdminGetAll>>) => r.body as Array<UserAdminGetAll>)
    );
  }

  /**
   * Path part for operation aUserInforDetailedUserGet
   */
  static readonly AUserInforDetailedUserGetPath = '/AUserInfor/DetailedUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aUserInforDetailedUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforDetailedUserGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, AUserInforService.AUserInforDetailedUserGetPath, 'get');
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
        return r as StrictHttpResponse<UserAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aUserInforDetailedUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforDetailedUserGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<UserAdminDetailedDto> {

    return this.aUserInforDetailedUserGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<UserAdminDetailedDto>) => r.body as UserAdminDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aUserInforDetailedUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforDetailedUserGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<UserAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, AUserInforService.AUserInforDetailedUserGetPath, 'get');
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
        return r as StrictHttpResponse<UserAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aUserInforDetailedUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aUserInforDetailedUserGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<UserAdminDetailedDto> {

    return this.aUserInforDetailedUserGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<UserAdminDetailedDto>) => r.body as UserAdminDetailedDto)
    );
  }

  /**
   * Path part for operation aUserInforSetBlockiertPost
   */
  static readonly AUserInforSetBlockiertPostPath = '/AUserInfor/SetBlockiert';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aUserInforSetBlockiertPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aUserInforSetBlockiertPost$Response(params?: {
    context?: HttpContext
    body?: BlockiertStateDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AUserInforService.AUserInforSetBlockiertPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aUserInforSetBlockiertPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aUserInforSetBlockiertPost(params?: {
    context?: HttpContext
    body?: BlockiertStateDto
  }
): Observable<void> {

    return this.aUserInforSetBlockiertPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
