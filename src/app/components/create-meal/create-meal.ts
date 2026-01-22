import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Meal } from '../../model/meal.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-create-meal',
  imports: [FormsModule],
  templateUrl: './create-meal.html',
  styleUrl: './create-meal.scss',
})
export class CreateMeal {
  mealService = inject(MealService);

  meal: Meal = { name: '' };

  createMeal() {
    this.mealService.createMeal(this.meal).subscribe({
      next: (response) => {
        console.log('Meal created successfully:', response);
      },
      error: (error) => {
        console.error('Error creating meal:', error);
      },
    });
  }
}
