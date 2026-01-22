import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BackendService {
  httpClient = inject(HttpClient);

  basicUrl: string = 'http://localhost:8080/';

  post(route: string, body: any): Observable<any> {
    return this.httpClient.post(this.basicUrl + route, body);
  }

  get(route: string, params?: any): Observable<any> {
    return this.httpClient.get(this.basicUrl + route, { params: params });
  }
}
