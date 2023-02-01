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

import { BorrowDataDto } from '../models/borrow-data-dto';
import { QrCodeDto } from '../models/qr-code-dto';

@Injectable({
  providedIn: 'root',
})
export class UBorrowService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation uBorrowBorrowPost
   */
  static readonly UBorrowBorrowPostPath = '/UBorrow/Borrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uBorrowBorrowPost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  uBorrowBorrowPost$Plain$Response(params?: {
    context?: HttpContext
    body?: BorrowDataDto
  }
): Observable<StrictHttpResponse<QrCodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, UBorrowService.UBorrowBorrowPostPath, 'post');
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
        return r as StrictHttpResponse<QrCodeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uBorrowBorrowPost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  uBorrowBorrowPost$Plain(params?: {
    context?: HttpContext
    body?: BorrowDataDto
  }
): Observable<QrCodeDto> {

    return this.uBorrowBorrowPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<QrCodeDto>) => r.body as QrCodeDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uBorrowBorrowPost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  uBorrowBorrowPost$Json$Response(params?: {
    context?: HttpContext
    body?: BorrowDataDto
  }
): Observable<StrictHttpResponse<QrCodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, UBorrowService.UBorrowBorrowPostPath, 'post');
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
        return r as StrictHttpResponse<QrCodeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uBorrowBorrowPost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  uBorrowBorrowPost$Json(params?: {
    context?: HttpContext
    body?: BorrowDataDto
  }
): Observable<QrCodeDto> {

    return this.uBorrowBorrowPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<QrCodeDto>) => r.body as QrCodeDto)
    );
  }

}
