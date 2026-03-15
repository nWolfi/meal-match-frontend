import { inject, Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { User } from '../../model/user.model';
import { jwtDecode } from 'jwt-decode';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Meal } from '../../model/meal.model';

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
    if (!this.decodedToken) {
      const token = localStorage.getItem('token');
      if (token) {
        this.token = token;
        this.decodedToken = jwtDecode(token);
      }
    }
    return this.decodedToken;
  }

  logout() {
    this.token = null;
    this.decodedToken = null;
    localStorage.removeItem('token');
  }

  saveMeal(meal: Meal) {
    const id = this.getDecodedToken()?.sub;
    if (!id) {
      console.error('User ID not found in token. Cannot save meal.');
      return;
    }

    const mealData = { mealId: meal.id };

    return this.backendService.post(`user/collection/${id}`, mealData);
  }

  getCollection() {
    const id = this.getDecodedToken()?.sub;
    if (!id) {
      console.error('User ID not found in token. Cannot fetch collection.');
      return;
    }

    return this.backendService.get(`user/collection/${id}`);
  }
}
