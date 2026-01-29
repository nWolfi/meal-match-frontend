import { Component, inject, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MealService } from '../../services/meal.service';
import { Meal } from '../../model/meal.model';

@Component({
  selector: 'app-swipe-page',
  imports: [CommonModule],
  templateUrl: './swipe-page.html',
  styleUrl: './swipe-page.scss',
})
export class SwipePage implements OnInit {
  mealService = inject(MealService);
  meals: Meal[] = [];
  currentMeal: Meal | null = null;
  currentIndex = 0;
  isLoading = true;

  ngOnInit(): void {
    this.mealService.getMeals().subscribe((meals) => {
      this.meals = meals ?? [];
      this.currentIndex = 0;
      this.currentMeal = this.meals[0] ?? null;
      this.isLoading = false;
    });
  }

  rateMeal(liked: boolean) {
    if (!this.currentMeal) {
      return;
    }

    this.showNextMeal();
  }

  showNextMeal() {
    const nextIndex = this.currentIndex + 1;
    if (nextIndex < this.meals.length) {
      this.currentIndex = nextIndex;
      this.currentMeal = this.meals[this.currentIndex] ?? null;
      return;
    }

    this.currentMeal = null;
  }

  getMealImage(meal: Meal | null) {
    if (!meal) {
      return '';
    }
    return meal.imageUrl ?? meal.imagePath ?? '';
  }

}
