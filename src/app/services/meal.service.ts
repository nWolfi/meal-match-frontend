import { inject, Injectable } from '@angular/core';
import { ApiAdapterService } from './api-adapter.service';
import { Meal } from '../model/meal.model';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  ApiAdapterService = inject(ApiAdapterService);

  createMeal(meal: Meal) {
    return this.ApiAdapterService.post<Meal>('meal/test', meal);
  }
}
