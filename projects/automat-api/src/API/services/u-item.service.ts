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

import { ItemDetailedDto } from '../models/item-detailed-dto';
import { ItemDisplayDto } from '../models/item-display-dto';

@Injectable({
  providedIn: 'root',
})
export class UItemService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation uItemGetAllItemsGet
   */
  static readonly UItemGetAllItemsGetPath = '/UItem/getAllItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetAllItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetAllItemsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetAllItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDisplayDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uItemGetAllItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetAllItemsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemDisplayDto>> {

    return this.uItemGetAllItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDisplayDto>>) => r.body as Array<ItemDisplayDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetAllItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetAllItemsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetAllItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDisplayDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uItemGetAllItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetAllItemsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemDisplayDto>> {

    return this.uItemGetAllItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDisplayDto>>) => r.body as Array<ItemDisplayDto>)
    );
  }

  /**
   * Path part for operation uItemGetPrevBorrowedGet
   */
  static readonly UItemGetPrevBorrowedGetPath = '/UItem/getPrevBorrowed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetPrevBorrowedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPrevBorrowedGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetPrevBorrowedGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDisplayDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uItemGetPrevBorrowedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPrevBorrowedGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemDisplayDto>> {

    return this.uItemGetPrevBorrowedGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDisplayDto>>) => r.body as Array<ItemDisplayDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetPrevBorrowedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPrevBorrowedGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetPrevBorrowedGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDisplayDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uItemGetPrevBorrowedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPrevBorrowedGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemDisplayDto>> {

    return this.uItemGetPrevBorrowedGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDisplayDto>>) => r.body as Array<ItemDisplayDto>)
    );
  }

  /**
   * Path part for operation uItemGetPopularItemsGet
   */
  static readonly UItemGetPopularItemsGetPath = '/UItem/getPopularItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetPopularItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPopularItemsGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetPopularItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDisplayDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uItemGetPopularItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPopularItemsGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemDisplayDto>> {

    return this.uItemGetPopularItemsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDisplayDto>>) => r.body as Array<ItemDisplayDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetPopularItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPopularItemsGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemDisplayDto>>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetPopularItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemDisplayDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `uItemGetPopularItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetPopularItemsGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemDisplayDto>> {

    return this.uItemGetPopularItemsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemDisplayDto>>) => r.body as Array<ItemDisplayDto>)
    );
  }

  /**
   * Path part for operation uItemGetDetailedItemGet
   */
  static readonly UItemGetDetailedItemGetPath = '/UItem/getDetailedItem';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetDetailedItemGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetDetailedItemGet$Plain$Response(params?: {
    ItemId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetDetailedItemGetPath, 'get');
    if (params) {
      rb.query('ItemId', params.ItemId, {});
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
   * To access the full response (for headers, for example), `uItemGetDetailedItemGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetDetailedItemGet$Plain(params?: {
    ItemId?: number;
    context?: HttpContext
  }
): Observable<ItemDetailedDto> {

    return this.uItemGetDetailedItemGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDetailedDto>) => r.body as ItemDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `uItemGetDetailedItemGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetDetailedItemGet$Json$Response(params?: {
    ItemId?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, UItemService.UItemGetDetailedItemGetPath, 'get');
    if (params) {
      rb.query('ItemId', params.ItemId, {});
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
   * To access the full response (for headers, for example), `uItemGetDetailedItemGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  uItemGetDetailedItemGet$Json(params?: {
    ItemId?: number;
    context?: HttpContext
  }
): Observable<ItemDetailedDto> {

    return this.uItemGetDetailedItemGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemDetailedDto>) => r.body as ItemDetailedDto)
    );
  }

}
