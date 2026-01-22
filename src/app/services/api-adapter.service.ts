import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiAdapterService {
  httpClient = inject(HttpClient);

  baseUrl: string = 'http://localhost:8080/';

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.buildUrl(url), body);
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(url));
  }

  put<T>(url: string, body: any): Observable<T> {
    return this.httpClient.put<T>(this.buildUrl(url), body);
  }

  delete<T>(url: string): Observable<T> {
    return this.httpClient.delete<T>(this.buildUrl(url));
  }

  buildUrl(endpoint: string): string {
    return this.baseUrl + endpoint;
  }
}
