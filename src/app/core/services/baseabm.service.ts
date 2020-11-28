import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { DEFAULT_HEADERS } from 'src/app/constants';

@Injectable({
  providedIn: 'root',
})
export class BaseabmService {
  constructor(private httpClient: HttpClient) {}

  public get<T>(url: string, queryParams?: any): Observable<T | any> {
    return this.httpClient.get<T>(environment.baseUrl + url, {
      headers: DEFAULT_HEADERS,
      params: queryParams,
    });
  }

  public post<T>(url: string, body: any): Observable<T | any> {
    return this.httpClient.post<T>(
      environment.baseUrl + url,
      JSON.stringify(body),
      { headers: DEFAULT_HEADERS }
    );
  }

  public put<T>(
    url: string,
    body: any,
    queryParams?: any
  ): Observable<T | any> {
    return this.httpClient.put<T>(
      environment.baseUrl + url,
      JSON.stringify(body),
      {
        headers: DEFAULT_HEADERS,
        params: queryParams,
      }
    );
  }

  public delete<T>(url: string, queryParams?: any): Observable<T | any> {
    return this.httpClient.delete<T>(environment.baseUrl + url, {
      headers: DEFAULT_HEADERS,
      params: queryParams,
    });
  }
}
