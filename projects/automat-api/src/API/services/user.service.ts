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


@Injectable({
  providedIn: 'root',
})
export class UserService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation userBorrowPost
   */
  static readonly UserBorrowPostPath = '/User/Borrow';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userBorrowPost$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  userBorrowPost$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserBorrowPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userBorrowPost$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userBorrowPost$Plain(params?: {
    context?: HttpContext
  }
): Observable<boolean> {

    return this.userBorrowPost$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `userBorrowPost$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  userBorrowPost$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<boolean>> {

    const rb = new RequestBuilder(this.rootUrl, UserService.UserBorrowPostPath, 'post');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: String((r as HttpResponse<any>).body) === 'true' }) as StrictHttpResponse<boolean>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `userBorrowPost$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  userBorrowPost$Json(params?: {
    context?: HttpContext
  }
): Observable<boolean> {

    return this.userBorrowPost$Json$Response(params).pipe(
      map((r: StrictHttpResponse<boolean>) => r.body as boolean)
    );
  }

}
