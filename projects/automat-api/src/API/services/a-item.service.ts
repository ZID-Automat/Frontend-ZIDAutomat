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

import { ItemAdminDetailedDto } from '../models/item-admin-detailed-dto';
import { ItemAdminUpdateAdd } from '../models/item-admin-update-add';
import { ItemChangeLocationDto } from '../models/item-change-location-dto';
import { ItemGetAllDto } from '../models/item-get-all-dto';

@Injectable({
  providedIn: 'root',
})
export class AItemService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation aItemGetAllGet
   */
  static readonly AItemGetAllGetPath = '/AItem/GetAll';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemGetAllGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetAllGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemGetAllDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemGetAllDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aItemGetAllGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetAllGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemGetAllDto>> {

    return this.aItemGetAllGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemGetAllDto>>) => r.body as Array<ItemGetAllDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemGetAllGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetAllGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<ItemGetAllDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemGetAllGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<ItemGetAllDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aItemGetAllGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetAllGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<ItemGetAllDto>> {

    return this.aItemGetAllGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<ItemGetAllDto>>) => r.body as Array<ItemGetAllDto>)
    );
  }

  /**
   * Path part for operation aItemSetItemPositionPost
   */
  static readonly AItemSetItemPositionPostPath = '/AItem/SetItemPosition';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemSetItemPositionPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aItemSetItemPositionPost$Response(params?: {
    context?: HttpContext
    body?: ItemChangeLocationDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemSetItemPositionPostPath, 'post');
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
   * To access the full response (for headers, for example), `aItemSetItemPositionPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aItemSetItemPositionPost(params?: {
    context?: HttpContext
    body?: ItemChangeLocationDto
  }
): Observable<void> {

    return this.aItemSetItemPositionPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation aItemItemAdminDetailedGet
   */
  static readonly AItemItemAdminDetailedGetPath = '/AItem/ItemAdminDetailed';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemItemAdminDetailedGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemItemAdminDetailedGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemItemAdminDetailedGetPath, 'get');
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
        return r as StrictHttpResponse<ItemAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aItemItemAdminDetailedGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemItemAdminDetailedGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ItemAdminDetailedDto> {

    return this.aItemItemAdminDetailedGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<ItemAdminDetailedDto>) => r.body as ItemAdminDetailedDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemItemAdminDetailedGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemItemAdminDetailedGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<ItemAdminDetailedDto>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemItemAdminDetailedGetPath, 'get');
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
        return r as StrictHttpResponse<ItemAdminDetailedDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aItemItemAdminDetailedGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemItemAdminDetailedGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<ItemAdminDetailedDto> {

    return this.aItemItemAdminDetailedGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<ItemAdminDetailedDto>) => r.body as ItemAdminDetailedDto)
    );
  }

  /**
   * Path part for operation aItemItemDetailedAdminAddPost
   */
  static readonly AItemItemDetailedAdminAddPostPath = '/AItem/ItemDetailedAdminAdd';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemItemDetailedAdminAddPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aItemItemDetailedAdminAddPost$Response(params?: {
    context?: HttpContext
    body?: ItemAdminUpdateAdd
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemItemDetailedAdminAddPostPath, 'post');
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
   * To access the full response (for headers, for example), `aItemItemDetailedAdminAddPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aItemItemDetailedAdminAddPost(params?: {
    context?: HttpContext
    body?: ItemAdminUpdateAdd
  }
): Observable<void> {

    return this.aItemItemDetailedAdminAddPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation aItemItemDetailedAdminUpdatePatch
   */
  static readonly AItemItemDetailedAdminUpdatePatchPath = '/AItem/ItemDetailedAdminUpdate';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemItemDetailedAdminUpdatePatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aItemItemDetailedAdminUpdatePatch$Response(params?: {
    context?: HttpContext
    body?: ItemAdminUpdateAdd
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemItemDetailedAdminUpdatePatchPath, 'patch');
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
   * To access the full response (for headers, for example), `aItemItemDetailedAdminUpdatePatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aItemItemDetailedAdminUpdatePatch(params?: {
    context?: HttpContext
    body?: ItemAdminUpdateAdd
  }
): Observable<void> {

    return this.aItemItemDetailedAdminUpdatePatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation aItemAddItemInstacePost
   */
  static readonly AItemAddItemInstacePostPath = '/AItem/AddItemInstace';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemAddItemInstacePost()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemAddItemInstacePost$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemAddItemInstacePostPath, 'post');
    if (params) {
      rb.query('id', params.id, {});
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
   * To access the full response (for headers, for example), `aItemAddItemInstacePost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemAddItemInstacePost(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<void> {

    return this.aItemAddItemInstacePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation aItemGetItemInstancesGet
   */
  static readonly AItemGetItemInstancesGetPath = '/AItem/GetItemInstances';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemGetItemInstancesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetItemInstancesGet$Plain$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemGetItemInstancesGetPath, 'get');
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
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aItemGetItemInstancesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetItemInstancesGet$Plain(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.aItemGetItemInstancesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aItemGetItemInstancesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetItemInstancesGet$Json$Response(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<StrictHttpResponse<number>> {

    const rb = new RequestBuilder(this.rootUrl, AItemService.AItemGetItemInstancesGetPath, 'get');
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
        return (r as HttpResponse<any>).clone({ body: parseFloat(String((r as HttpResponse<any>).body)) }) as StrictHttpResponse<number>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aItemGetItemInstancesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aItemGetItemInstancesGet$Json(params?: {
    id?: number;
    context?: HttpContext
  }
): Observable<number> {

    return this.aItemGetItemInstancesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<number>) => r.body as number)
    );
  }

}
