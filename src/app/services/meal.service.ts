import { inject, Injectable } from '@angular/core';
import { ApiAdapterService } from './api-adapter.service';
import { Meal } from '../model/meal.model';

@Injectable({
  providedIn: 'root',
})
export class MealService {
  ApiAdapterService = inject(ApiAdapterService);

  createMeal(meal: Meal, image: File) {
    const formData = new FormData();
    formData.append('meal', new Blob([JSON.stringify(meal)], { type: 'application/json' }));
    formData.append('image', image);

    console.log(image);
    return this.ApiAdapterService.postFormData<Meal>('meal', formData);
  }
}
