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

}
