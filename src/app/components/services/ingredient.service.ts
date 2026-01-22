import { inject, Injectable } from '@angular/core';
import { BackendService } from './backend.service';
import { Ingredient } from '../../model/ingredient.model';

@Injectable({
  providedIn: 'root',
})
export class IngredientService {
  backendService = inject(BackendService);

  createIngredient(ingredientDto: Ingredient) {
    return this.backendService.post('ingredients', ingredientDto);
  }

  getIngredients() {
    return this.backendService.get('ingredients');
  }
}
