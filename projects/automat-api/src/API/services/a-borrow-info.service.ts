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
import { UserAdmiBorrowDto } from '../models/user-admi-borrow-dto';
import { ValIdObjectDto } from '../models/val-id-object-dto';

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
   * Path part for operation aBorrowInfoBorrowDetailedGet
   */
  static readonly ABorrowInfoBorrowDetailedGetPath = '/ABorrowInfo/BorrowDetailed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoBorrowDetailedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoBorrowDetailedGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BorrowAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoBorrowDetailedGetPath, 'get');
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
   * To access the full response (for headers, for example), `aBorrowInfoBorrowDetailedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoBorrowDetailedGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<BorrowAdminDetailedDto> {

    return this.aBorrowInfoBorrowDetailedGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowAdminDetailedDto>) => r.body as BorrowAdminDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoBorrowDetailedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoBorrowDetailedGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<BorrowAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoBorrowDetailedGetPath, 'get');
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
   * To access the full response (for headers, for example), `aBorrowInfoBorrowDetailedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoBorrowDetailedGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<BorrowAdminDetailedDto> {

    return this.aBorrowInfoBorrowDetailedGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<BorrowAdminDetailedDto>) => r.body as BorrowAdminDetailedDto)
    );
  }

  /**
   * Path part for operation aBorrowInfoEntschuldigtPost
   */
  static readonly ABorrowInfoEntschuldigtPostPath = '/ABorrowInfo/Entschuldigt';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoEntschuldigtPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aBorrowInfoEntschuldigtPost$Response(params?: {
    context?: HttpContext
    body?: ValIdObjectDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoEntschuldigtPostPath, 'post');
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
   * To access the full response (for headers, for example), `aBorrowInfoEntschuldigtPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aBorrowInfoEntschuldigtPost(params?: {
    context?: HttpContext
    body?: ValIdObjectDto
  }
): Observable<void> {

    return this.aBorrowInfoEntschuldigtPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation aBorrowInfoZurueckgebenPost
   */
  static readonly ABorrowInfoZurueckgebenPostPath = '/ABorrowInfo/Zurueckgeben';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoZurueckgebenPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aBorrowInfoZurueckgebenPost$Plain$Response(params?: {
    context?: HttpContext
    body?: ValIdObjectDto
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoZurueckgebenPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoZurueckgebenPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aBorrowInfoZurueckgebenPost$Plain(params?: {
    context?: HttpContext
    body?: ValIdObjectDto
  }
): Observable<string> {

    return this.aBorrowInfoZurueckgebenPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoZurueckgebenPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aBorrowInfoZurueckgebenPost$Json$Response(params?: {
    context?: HttpContext
    body?: ValIdObjectDto
  }
): Observable<StrictHttpResponse<string>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoZurueckgebenPostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<string>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoZurueckgebenPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aBorrowInfoZurueckgebenPost$Json(params?: {
    context?: HttpContext
    body?: ValIdObjectDto
  }
): Observable<string> {

    return this.aBorrowInfoZurueckgebenPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<string>) => r.body as string)
    );
  }

  /**
   * Path part for operation aBorrowInfoAllBorrowsGet
   */
  static readonly ABorrowInfoAllBorrowsGetPath = '/ABorrowInfo/AllBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoAllBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoAllBorrowsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoAllBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoAllBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoAllBorrowsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoAllBorrowsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoAllBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoAllBorrowsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoAllBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoAllBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoAllBorrowsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoAllBorrowsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * Path part for operation aBorrowInfoToDealWithBorrowsGet
   */
  static readonly ABorrowInfoToDealWithBorrowsGetPath = '/ABorrowInfo/ToDealWithBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoToDealWithBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoToDealWithBorrowsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoToDealWithBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoToDealWithBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoToDealWithBorrowsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoToDealWithBorrowsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoToDealWithBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoToDealWithBorrowsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoToDealWithBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoToDealWithBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoToDealWithBorrowsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoToDealWithBorrowsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * Path part for operation aBorrowInfoFinishedBorrowsGet
   */
  static readonly ABorrowInfoFinishedBorrowsGetPath = '/ABorrowInfo/FinishedBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoFinishedBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoFinishedBorrowsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoFinishedBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoFinishedBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoFinishedBorrowsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoFinishedBorrowsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoFinishedBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoFinishedBorrowsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoFinishedBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoFinishedBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoFinishedBorrowsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoFinishedBorrowsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * Path part for operation aBorrowInfoOpenBorrowsGet
   */
  static readonly ABorrowInfoOpenBorrowsGetPath = '/ABorrowInfo/OpenBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoOpenBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoOpenBorrowsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoOpenBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoOpenBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoOpenBorrowsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoOpenBorrowsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aBorrowInfoOpenBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoOpenBorrowsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<UserAdmiBorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, ABorrowInfoService.ABorrowInfoOpenBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<UserAdmiBorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aBorrowInfoOpenBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aBorrowInfoOpenBorrowsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<UserAdmiBorrowDto>> {

    return this.aBorrowInfoOpenBorrowsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<UserAdmiBorrowDto>>) => r.body as Array<UserAdmiBorrowDto>)
    );
  }

}
