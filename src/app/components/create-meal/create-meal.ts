import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../model/meal.model';
import { Ingredient } from '../../model/ingredient.model';

@Component({
  selector: 'app-create-meal',
  imports: [FormsModule],
  templateUrl: './create-meal.html',
  styleUrl: './create-meal.scss',
})
export class CreateMeal {
  meal: Meal = { name: '', ingredients: [] };
  Ingredients: Ingredient[] = [];

  mealNameText: string = '';
  imageBytes: Uint8Array | null = null;

  createMeal() {
    this.meal = {
      ...this.meal,
      name: this.mealNameText,
      ingredients: [...this.Ingredients],
      imageBytes: this.imageBytes,
    };
    console.log('Creating meal:', this.mealNameText);
    console.log('With ingredients:', this.Ingredients);
    console.log('With image bytes:', this.imageBytes);
  }

  addIngredient() {
    this.Ingredients = [
      ...this.Ingredients,
      { name: '', gram: 0, caloriesPerGram: 0 },
    ];
  }

  removeIngredient(index: number) {
    this.Ingredients = this.Ingredients.filter((_, i) => i !== index);
  }

  onImageSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0] ?? null;
    if (!file) {
      this.imageBytes = null;
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const buffer = reader.result as ArrayBuffer | null;
      this.imageBytes = buffer ? new Uint8Array(buffer) : null;
    };
    reader.onerror = () => {
      this.imageBytes = null;
    };
    reader.readAsArrayBuffer(file);
  }
}
