/* tslint:disable */
/* eslint-disable */
import { HttpClient, HttpContext, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { filter, map } from 'rxjs/operators';
import { StrictHttpResponse } from '../../strict-http-response';
import { RequestBuilder } from '../../request-builder';

import { PageResponseBorrowedBookResponse } from '../../models/page-response-borrowed-book-response';

export interface FindAllBorrowedBooks$Params {
  page?: number;
  size?: number;
}

export function findAllBorrowedBooks(http: HttpClient, rootUrl: string, params?: FindAllBorrowedBooks$Params, context?: HttpContext): Observable<StrictHttpResponse<PageResponseBorrowedBookResponse>> {
  const rb = new RequestBuilder(rootUrl, findAllBorrowedBooks.PATH, 'get');
  if (params) {
    rb.query('page', params.page, {});
    rb.query('size', params.size, {});
  }

  return http.request(
    rb.build({ responseType: 'json', accept: 'application/json', context })
  ).pipe(
    filter((r: any): r is HttpResponse<any> => r instanceof HttpResponse),
    map((r: HttpResponse<any>) => {
      return r as StrictHttpResponse<PageResponseBorrowedBookResponse>;
    })
  );
}

findAllBorrowedBooks.PATH = '/books/borrowed';
