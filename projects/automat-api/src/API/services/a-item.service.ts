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

}
