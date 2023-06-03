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

import { AnalyticItemDto } from '../models/analytic-item-dto';
import { GesammtBorrowsDto } from '../models/gesammt-borrows-dto';
import { TaeglicheUserDto } from '../models/taegliche-user-dto';
import { WieVielZuspaetDto } from '../models/wie-viel-zuspaet-dto';

@Injectable({
  providedIn: 'root',
})
export class AAnalyticsService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation aAnalyticsGetAnalyticsItemsGet
   */
  static readonly AAnalyticsGetAnalyticsItemsGetPath = '/AAnalytics/GetAnalyticsItems';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsGetAnalyticsItemsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGetAnalyticsItemsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AnalyticItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsGetAnalyticsItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AnalyticItemDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsGetAnalyticsItemsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGetAnalyticsItemsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<AnalyticItemDto>> {

    return this.aAnalyticsGetAnalyticsItemsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AnalyticItemDto>>) => r.body as Array<AnalyticItemDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsGetAnalyticsItemsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGetAnalyticsItemsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<AnalyticItemDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsGetAnalyticsItemsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<AnalyticItemDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsGetAnalyticsItemsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGetAnalyticsItemsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<AnalyticItemDto>> {

    return this.aAnalyticsGetAnalyticsItemsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<AnalyticItemDto>>) => r.body as Array<AnalyticItemDto>)
    );
  }

  /**
   * Path part for operation aAnalyticsGesamtBorrowsGet
   */
  static readonly AAnalyticsGesamtBorrowsGetPath = '/AAnalytics/GesamtBorrows';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsGesamtBorrowsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGesamtBorrowsGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GesammtBorrowsDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsGesamtBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GesammtBorrowsDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsGesamtBorrowsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGesamtBorrowsGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<GesammtBorrowsDto>> {

    return this.aAnalyticsGesamtBorrowsGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GesammtBorrowsDto>>) => r.body as Array<GesammtBorrowsDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsGesamtBorrowsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGesamtBorrowsGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<GesammtBorrowsDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsGesamtBorrowsGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<GesammtBorrowsDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsGesamtBorrowsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsGesamtBorrowsGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<GesammtBorrowsDto>> {

    return this.aAnalyticsGesamtBorrowsGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<GesammtBorrowsDto>>) => r.body as Array<GesammtBorrowsDto>)
    );
  }

  /**
   * Path part for operation aAnalyticsWievielZuspatGet
   */
  static readonly AAnalyticsWievielZuspatGetPath = '/AAnalytics/WievielZuspat';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsWievielZuspatGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsWievielZuspatGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WieVielZuspaetDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsWievielZuspatGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WieVielZuspaetDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsWievielZuspatGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsWievielZuspatGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<WieVielZuspaetDto>> {

    return this.aAnalyticsWievielZuspatGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WieVielZuspaetDto>>) => r.body as Array<WieVielZuspaetDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsWievielZuspatGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsWievielZuspatGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<WieVielZuspaetDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsWievielZuspatGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<WieVielZuspaetDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsWievielZuspatGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsWievielZuspatGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<WieVielZuspaetDto>> {

    return this.aAnalyticsWievielZuspatGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<WieVielZuspaetDto>>) => r.body as Array<WieVielZuspaetDto>)
    );
  }

  /**
   * Path part for operation aAnalyticsTaeglicheUserGet
   */
  static readonly AAnalyticsTaeglicheUserGetPath = '/AAnalytics/TaeglicheUser';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsTaeglicheUserGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsTaeglicheUserGet$Plain$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TaeglicheUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsTaeglicheUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TaeglicheUserDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsTaeglicheUserGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsTaeglicheUserGet$Plain(params?: {
  },
  context?: HttpContext

): Observable<Array<TaeglicheUserDto>> {

    return this.aAnalyticsTaeglicheUserGet$Plain$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TaeglicheUserDto>>) => r.body as Array<TaeglicheUserDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aAnalyticsTaeglicheUserGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsTaeglicheUserGet$Json$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<Array<TaeglicheUserDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AAnalyticsService.AAnalyticsTaeglicheUserGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<TaeglicheUserDto>>;
      })
    );
  }

  /**
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `aAnalyticsTaeglicheUserGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aAnalyticsTaeglicheUserGet$Json(params?: {
  },
  context?: HttpContext

): Observable<Array<TaeglicheUserDto>> {

    return this.aAnalyticsTaeglicheUserGet$Json$Response(params,context).pipe(
      map((r: StrictHttpResponse<Array<TaeglicheUserDto>>) => r.body as Array<TaeglicheUserDto>)
    );
  }

}
