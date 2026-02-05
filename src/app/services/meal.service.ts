import { inject, Injectable } from '@angular/core';
import { ApiAdapterService } from './api-adapter.service';
import { Meal } from '../model/meal.model';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  ApiAdapterService = inject(ApiAdapterService);

  createMeal(meal: Meal) {
    return this.ApiAdapterService.post<Meal>('meal', meal);
  }

  createMealWithImage(formData: FormData) {
    return this.ApiAdapterService.postFormData<Meal>('meal', formData);
  }

  getRandom(excludeIds?: string[]) {
    if (!excludeIds) {
      return this.ApiAdapterService.get<Meal>('meal/random');
    }
    return this.ApiAdapterService.getWithParams<Meal>('meal/random', { excludeIds });
  }

  getRandomMeal() {
    return this.ApiAdapterService.get<Meal>('meal/random-meal');
  }
}
