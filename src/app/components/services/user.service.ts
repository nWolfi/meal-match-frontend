import { inject, Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { User } from '../../model/user.model';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  backendService = inject(BackendService);
  token: string | null = null;
  decodedToken: any = null;

  createUser(userDto: User) {
    return this.backendService.post('user', userDto);
  }

  login(userDto: User): Observable<boolean> {
    return this.backendService.post('user/login', userDto).pipe(
      map((response: { success: boolean; token: string }) => {
        if (!response.success || !response.token) {
          console.error('Login failed: Invalid credentials');
          return false;
        }

        this.token = response.token;
        this.decodedToken = jwtDecode(this.token);

        localStorage.setItem('token', this.token);

        return true;
      }),
      catchError((error) => {
        console.error('Login error:', error);
        return of(false);
      }),
    );
  }

  getDecodedToken() {
    return this.decodedToken;
  }

  logout() {
    this.token = null;
    this.decodedToken = null;
    localStorage.removeItem('token');
  }
}
