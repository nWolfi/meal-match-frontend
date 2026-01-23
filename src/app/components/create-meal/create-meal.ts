import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../model/meal.model';
import { MealService } from '../../services/meal.service';
import { Ingredient } from '../../model/ingredient.model';

@Component({
  selector: 'app-create-meal',
  imports: [FormsModule],
  templateUrl: './create-meal.html',
  styleUrl: './create-meal.scss',
})
export class CreateMeal {
  mealService = inject(MealService);

  meal: Meal = {
    name: '',
    Ingredients: [],
  };

  ingredient: Ingredient = {
    name: '',
    caloriesPerGram: 0,
    gram: 0,
  };

  selectedFile: File | null = null;

  addIngredient() {
    this.meal.Ingredients?.push({ ...this.ingredient });
    this.ingredient = {
      name: '',
      caloriesPerGram: 0,
      gram: 0,
    };
  }

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  createMeal() {

    console.log('Meal created successfully:', this.meal);
    this.mealService.createMeal(this.meal, this.selectedFile!).subscribe({
      next: (response) => {
        console.log('Meal created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating meal:', error);
      },
    });
  }
}
