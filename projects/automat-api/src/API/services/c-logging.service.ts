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

import { LogQrCodeDto } from '../models/log-qr-code-dto';

@Injectable({
  providedIn: 'root',
})
export class CLoggingService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation cLoggingLogEjectedItemPost
   */
  static readonly CLoggingLogEjectedItemPostPath = '/CLogging/LogEjectedItem';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cLoggingLogEjectedItemPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cLoggingLogEjectedItemPost$Response(params?: {
    body?: LogQrCodeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CLoggingService.CLoggingLogEjectedItemPostPath, 'post');
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
   * To access the full response (for headers, for example), `cLoggingLogEjectedItemPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cLoggingLogEjectedItemPost(params?: {
    body?: LogQrCodeDto
  },
  context?: HttpContext

): Observable<void> {

    return this.cLoggingLogEjectedItemPost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cLoggingLogInvaldScannedQrCodePost
   */
  static readonly CLoggingLogInvaldScannedQrCodePostPath = '/CLogging/LogInvaldScannedQrCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cLoggingLogInvaldScannedQrCodePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cLoggingLogInvaldScannedQrCodePost$Response(params?: {
    body?: LogQrCodeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CLoggingService.CLoggingLogInvaldScannedQrCodePostPath, 'post');
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
   * To access the full response (for headers, for example), `cLoggingLogInvaldScannedQrCodePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cLoggingLogInvaldScannedQrCodePost(params?: {
    body?: LogQrCodeDto
  },
  context?: HttpContext

): Observable<void> {

    return this.cLoggingLogInvaldScannedQrCodePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation cLoggingLogScannedQrCodePost
   */
  static readonly CLoggingLogScannedQrCodePostPath = '/CLogging/LogScannedQrCode';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `cLoggingLogScannedQrCodePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cLoggingLogScannedQrCodePost$Response(params?: {
    body?: LogQrCodeDto
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, CLoggingService.CLoggingLogScannedQrCodePostPath, 'post');
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
   * To access the full response (for headers, for example), `cLoggingLogScannedQrCodePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  cLoggingLogScannedQrCodePost(params?: {
    body?: LogQrCodeDto
  },
  context?: HttpContext

): Observable<void> {

    return this.cLoggingLogScannedQrCodePost$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
