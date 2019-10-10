import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

// Environment variables
import { environment } from '../../../../environments/environment';

// Service intercept http request
@Injectable()
export class HttpInterceptorService implements HttpInterceptor {

  constructor() {}

  // Base api url and keys
  private readonly api = {
    url: environment.host,
    key: environment.appid
  };

  /**
   * Request interceptor
   * @param request - An outgoing HTTP request with an optional typed body
   * @param next - Transforms an HttpRequest into a stream of HttpEvents, one of which will likely be a HttpResponse.
   */
  public intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(this.applyQueryParams(request))
      .pipe(
        catchError((error: HttpErrorResponse) => this.errorHandler(error)),
      );
  }

  /**
   * Apply query parameters
   * @param request - An outgoing HTTP request with an optional typed body
   */
  private applyQueryParams(request: HttpRequest<any>): HttpRequest<any> {
    const url = `${this.api.url}${request.url}${this.api.key}`;

    return request.clone({url});
  }

  /**
   * Error handler http requests
   * @param error - A response that represents an error or failure
   */
  private errorHandler(error: HttpErrorResponse): Observable<any> {
    return throwError(error);
  }
}
