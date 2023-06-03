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
    body?: QrCodeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ValidQrCodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowValidateQrCodePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ValidQrCodeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cBorrowValidateQrCodePost$Plain$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowValidateQrCodePost$Plain(params?: {
    body?: QrCodeDto
  },
  context?: HttpContext

): Observable<ValidQrCodeDto> {

    return this.cBorrowValidateQrCodePost$Plain$Response(params,context).pipe(
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
    body?: QrCodeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ValidQrCodeDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowValidateQrCodePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ValidQrCodeDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cBorrowValidateQrCodePost$Json$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowValidateQrCodePost$Json(params?: {
    body?: QrCodeDto
  },
  context?: HttpContext

): Observable<ValidQrCodeDto> {

    return this.cBorrowValidateQrCodePost$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ValidQrCodeDto>) => r.body as ValidQrCodeDto)
    );
  }

  /**
   * Path part for operation cBorrowLoadItemDataItemGet
   */
  static readonly CBorrowLoadItemDataItemGetPath = '/CBorrow/LoadItemData/{item}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowLoadItemDataItemGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataItemGet$Plain$Response(params: {
    item: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ItemDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowLoadItemDataItemGetPath, 'get');
    if (params) {
      rb.path('item', params.item, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDetailedDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cBorrowLoadItemDataItemGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataItemGet$Plain(params: {
    item: number;
  },
  context?: HttpContext

): Observable<ItemDetailedDto> {

    return this.cBorrowLoadItemDataItemGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<ItemDetailedDto>) => r.body as ItemDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowLoadItemDataItemGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataItemGet$Json$Response(params: {
    item: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<ItemDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowLoadItemDataItemGetPath, 'get');
    if (params) {
      rb.path('item', params.item, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<ItemDetailedDto>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cBorrowLoadItemDataItemGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowLoadItemDataItemGet$Json(params: {
    item: number;
  },
  context?: HttpContext

): Observable<ItemDetailedDto> {

    return this.cBorrowLoadItemDataItemGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<ItemDetailedDto>) => r.body as ItemDetailedDto)
    );
  }

  /**
   * Path part for operation cBorrowInvalidateQrCodePatch
   */
  static readonly CBorrowInvalidateQrCodePatchPath = '/CBorrow/InvalidateQrCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowInvalidateQrCodePatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowInvalidateQrCodePatch$Response(params?: {
    body?: InvalidateQrCodeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowInvalidateQrCodePatchPath, 'patch');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cBorrowInvalidateQrCodePatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cBorrowInvalidateQrCodePatch(params?: {
    body?: InvalidateQrCodeDto
  },
  context?: HttpContext

): Observable<void> {

    return this.cBorrowInvalidateQrCodePatch$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cBorrowItemLocationItemIdGet
   */
  static readonly CBorrowItemLocationItemIdGetPath = '/CBorrow/ItemLocation/{itemId}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cBorrowItemLocationItemIdGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowItemLocationItemIdGet$Response(params: {
    itemId: number;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CBorrowService.CBorrowItemLocationItemIdGetPath, 'get');
    if (params) {
      rb.path('itemId', params.itemId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `cBorrowItemLocationItemIdGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  cBorrowItemLocationItemIdGet(params: {
    itemId: number;
  },
  context?: HttpContext

): Observable<void> {

    return this.cBorrowItemLocationItemIdGet$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
