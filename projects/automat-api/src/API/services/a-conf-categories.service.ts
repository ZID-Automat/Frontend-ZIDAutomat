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

import { CategoryAddDto } from '../models/category-add-dto';
import { CategoryUpdateDto } from '../models/category-update-dto';

@Injectable({
  providedIn: 'root',
})
export class AConfCategoriesService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation aConfCategoriesGetConfCategoriesGet
   */
  static readonly AConfCategoriesGetConfCategoriesGetPath = '/AConfCategories/GetConfCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aConfCategoriesGetConfCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  aConfCategoriesGetConfCategoriesGet$Plain$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CategoryUpdateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AConfCategoriesService.AConfCategoriesGetConfCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryUpdateDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aConfCategoriesGetConfCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aConfCategoriesGetConfCategoriesGet$Plain(params?: {
    context?: HttpContext
  }
): Observable<Array<CategoryUpdateDto>> {

    return this.aConfCategoriesGetConfCategoriesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryUpdateDto>>) => r.body as Array<CategoryUpdateDto>)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aConfCategoriesGetConfCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  aConfCategoriesGetConfCategoriesGet$Json$Response(params?: {
    context?: HttpContext
  }
): Observable<StrictHttpResponse<Array<CategoryUpdateDto>>> {

    const rb = new RequestBuilder(this.rootUrl, AConfCategoriesService.AConfCategoriesGetConfCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json',
      context: params?.context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<Array<CategoryUpdateDto>>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `aConfCategoriesGetConfCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  aConfCategoriesGetConfCategoriesGet$Json(params?: {
    context?: HttpContext
  }
): Observable<Array<CategoryUpdateDto>> {

    return this.aConfCategoriesGetConfCategoriesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<Array<CategoryUpdateDto>>) => r.body as Array<CategoryUpdateDto>)
    );
  }

  /**
   * Path part for operation aConfCategoriesUpdateConfCategoryPatch
   */
  static readonly AConfCategoriesUpdateConfCategoryPatchPath = '/AConfCategories/UpdateConfCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aConfCategoriesUpdateConfCategoryPatch()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aConfCategoriesUpdateConfCategoryPatch$Response(params?: {
    context?: HttpContext
    body?: CategoryUpdateDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AConfCategoriesService.AConfCategoriesUpdateConfCategoryPatchPath, 'patch');
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
   * To access the full response (for headers, for example), `aConfCategoriesUpdateConfCategoryPatch$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aConfCategoriesUpdateConfCategoryPatch(params?: {
    context?: HttpContext
    body?: CategoryUpdateDto
  }
): Observable<void> {

    return this.aConfCategoriesUpdateConfCategoryPatch$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation aConfCategoriesAddCategoryPost
   */
  static readonly AConfCategoriesAddCategoryPostPath = '/AConfCategories/AddCategory';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `aConfCategoriesAddCategoryPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aConfCategoriesAddCategoryPost$Response(params?: {
    context?: HttpContext
    body?: CategoryAddDto
  }
): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AConfCategoriesService.AConfCategoriesAddCategoryPostPath, 'post');
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
   * To access the full response (for headers, for example), `aConfCategoriesAddCategoryPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  aConfCategoriesAddCategoryPost(params?: {
    context?: HttpContext
    body?: CategoryAddDto
  }
): Observable<void> {

    return this.aConfCategoriesAddCategoryPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
