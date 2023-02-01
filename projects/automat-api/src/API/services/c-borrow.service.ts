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

import { InvalidateQrCodeDto } from '../models/invalidate-qr-code-dto';
import { ItemDetailedDto } from '../models/item-detailed-dto';
import { QrCodeDto } from '../models/qr-code-dto';
import { ValidQrCodeDto } from '../models/valid-qr-code-dto';

@Injectable({
  providedIn: 'root',
})
export class CBorrowService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation cBorrowValidateQrCodePost
   */
  static readonly CBorrowValidateQrCodePostPath = '/CBorrow/ValidateQrCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowValidateQrCodePost$Plain()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowValidateQrCodePost$Plain$Response(params?: {
    context?: HttpContext
    body?: QrCodeDto
  }
): Observable<StrictHttpResponse<ValidQrCodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowValidateQrCodePostPath, 'post');
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
        return r as StrictHttpResponse<ValidQrCodeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cBorrowValidateQrCodePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowValidateQrCodePost$Plain(params?: {
    context?: HttpContext
    body?: QrCodeDto
  }
): Observable<ValidQrCodeDto> {

    return this.cBorrowValidateQrCodePost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ValidQrCodeDto>) => r.body as ValidQrCodeDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowValidateQrCodePost$Json()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowValidateQrCodePost$Json$Response(params?: {
    context?: HttpContext
    body?: QrCodeDto
  }
): Observable<StrictHttpResponse<ValidQrCodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowValidateQrCodePostPath, 'post');
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
        return r as StrictHttpResponse<ValidQrCodeDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cBorrowValidateQrCodePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowValidateQrCodePost$Json(params?: {
    context?: HttpContext
    body?: QrCodeDto
  }
): Observable<ValidQrCodeDto> {

    return this.cBorrowValidateQrCodePost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ValidQrCodeDto>) => r.body as ValidQrCodeDto)
    );
  }

  /**
   * Path part for operation cBorrowLoadItemDataGet
   */
  static readonly CBorrowLoadItemDataGetPath = '/CBorrow/LoadItemData';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowLoadItemDataGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataGet$Plain$Response(params?: {
    item?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowLoadItemDataGetPath, 'get');
    if (params) {
      rb.query('item', params.item, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cBorrowLoadItemDataGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataGet$Plain(params?: {
    item?: number;
    context?: HttpContext
  }
): Observable<ItemDetailedDto> {

    return this.cBorrowLoadItemDataGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDetailedDto>) => r.body as ItemDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowLoadItemDataGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataGet$Json$Response(params?: {
    item?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowLoadItemDataGetPath, 'get');
    if (params) {
      rb.query('item', params.item, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `cBorrowLoadItemDataGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataGet$Json(params?: {
    item?: number;
    context?: HttpContext
  }
): Observable<ItemDetailedDto> {

    return this.cBorrowLoadItemDataGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDetailedDto>) => r.body as ItemDetailedDto)
    );
  }

  /**
   * Path part for operation cBorrowInvalidateQrCodePut
   */
  static readonly CBorrowInvalidateQrCodePutPath = '/CBorrow/InvalidateQrCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowInvalidateQrCodePut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowInvalidateQrCodePut$Response(params?: {
    context?: HttpContext
    body?: InvalidateQrCodeDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowInvalidateQrCodePutPath, 'put');
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
   * To access the full response (for headers, for example), `cBorrowInvalidateQrCodePut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowInvalidateQrCodePut(params?: {
    context?: HttpContext
    body?: InvalidateQrCodeDto
  }
): Observable<void> {

    return this.cBorrowInvalidateQrCodePut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
