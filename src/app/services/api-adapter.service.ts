import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Meal } from '../model/meal.model';

@Injectable({
  providedIn: 'root',
})
export class ApiAdapterService {
  httpClient = inject(HttpClient);

  baseUrl: string = 'http://localhost:3000/';

  post<T>(url: string, body: any): Observable<T> {
    return this.httpClient.post<T>(this.buildUrl(url), body);
  }

  postFormData<T>(url: string, formData: FormData): Observable<T> {
    return this.httpClient.post<T>(this.buildUrl(url), formData);
  }

  get<T>(url: string): Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(url));
  }

  getWithParams<T>(url: string, params: any): Observable<T> {
    return this.httpClient.get<T>(this.buildUrl(url), { params });
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
