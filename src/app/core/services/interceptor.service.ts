import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { KEYS } from 'src/app/constants';
import { LocalstorageService } from './localstorage.service';

@Injectable({
  providedIn: 'root',
})
export class InterceptorService {
  constructor(private localStorageService: LocalstorageService) {}

  public intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    const token = this.localStorageService.getItem(KEYS.TOKEN_HEADER);
    let headers = request.headers;
    if (token) {
      headers = request.headers.append(
        KEYS.TOKEN_HEADER,
        `${KEYS.TOKEN_PREFIX}${token}`
      );
    }
    request = request.clone({ headers });
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        return throwError(error);
      })
    );
  }
}
