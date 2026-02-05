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
    image: '',
    ingredients: [],
  };

  ingredient: Ingredient = {
    name: '',
    gram: 0,
    caloriesPerGram: 0,
  };

  selectedFile: File | null = null;

  addIngredient() {
    this.meal.ingredients.push({ ...this.ingredient });
    this.ingredient = {
      name: '',
      gram: 0,
    };
  }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    if (file) {
      this.selectedFile = file;
    }
  }

  createMeal() {
    if (this.selectedFile) {
      this.uploadMeal();
    } else {
      console.warn('Ein Bild muss ausgewählt werden, um ein Meal zu erstellen.');
      // Optional: Zeige eine Benutzerfreundliche Meldung, z.B. mit einem Alert oder Toast
      alert('Bitte wählen Sie ein Bild aus, bevor Sie das Meal erstellen.');
    }
  }

  uploadMeal() {
    const formData = new FormData();
    formData.append('image', this.selectedFile as Blob);
    const mealData = {
      name: this.meal.name,
      ingredients: this.meal.ingredients,
    };
    formData.append('meal', JSON.stringify(mealData));

    this.mealService.createMealWithImage(formData).subscribe({
      next: (response) => {
        console.log('Meal created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating meal:', error);
      },
    });
  }
}
