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

import { BorrowDto } from '../models/borrow-dto';

@Injectable({
  providedIn: 'root',
})
export class UQrCodeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation uQrCodeActiveQrCodesGet
   */
  static readonly UQrCodeActiveQrCodesGetPath = '/UQrCode/ActiveQrCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uQrCodeActiveQrCodesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UQrCodeService.UQrCodeActiveQrCodesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uQrCodeActiveQrCodesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<BorrowDto>> {

    return this.uQrCodeActiveQrCodesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BorrowDto>>) => r.body as Array<BorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uQrCodeActiveQrCodesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UQrCodeService.UQrCodeActiveQrCodesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uQrCodeActiveQrCodesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<BorrowDto>> {

    return this.uQrCodeActiveQrCodesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BorrowDto>>) => r.body as Array<BorrowDto>)
    );
  }

  /**
   * Path part for operation uQrCodeAllQrCodesGet
   */
  static readonly UQrCodeAllQrCodesGetPath = '/UQrCode/AllQrCodes';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uQrCodeAllQrCodesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeAllQrCodesGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UQrCodeService.UQrCodeAllQrCodesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uQrCodeAllQrCodesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeAllQrCodesGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<BorrowDto>> {

    return this.uQrCodeAllQrCodesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BorrowDto>>) => r.body as Array<BorrowDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uQrCodeAllQrCodesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeAllQrCodesGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<BorrowDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UQrCodeService.UQrCodeAllQrCodesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<BorrowDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uQrCodeAllQrCodesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeAllQrCodesGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<BorrowDto>> {

    return this.uQrCodeAllQrCodesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<BorrowDto>>) => r.body as Array<BorrowDto>)
    );
  }

  /**
   * Path part for operation uQrCodeActiveQrCodesCountGet
   */
  static readonly UQrCodeActiveQrCodesCountGetPath = '/UQrCode/ActiveQrCodesCount';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uQrCodeActiveQrCodesCountGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesCountGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UQrCodeService.UQrCodeActiveQrCodesCountGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uQrCodeActiveQrCodesCountGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesCountGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<number> {

    return this.uQrCodeActiveQrCodesCountGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uQrCodeActiveQrCodesCountGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesCountGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, UQrCodeService.UQrCodeActiveQrCodesCountGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uQrCodeActiveQrCodesCountGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uQrCodeActiveQrCodesCountGet$Json(params?: {
    context?: HttpContext
  }
): Observable<number> {

    return this.uQrCodeActiveQrCodesCountGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
