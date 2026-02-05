import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal } from '../../model/meal.model';
import { MealService } from '../../services/meal.service';

@Component({
  selector: 'app-swipe',
  imports: [CommonModule],
  templateUrl: './swipe.html',
  styleUrl: './swipe.scss',
})
export class Swipe {
  mealService = inject(MealService);

  meal: Meal = {
    name: '',
    image: '',
    ingredients: [],
  };

  animationClass: string = '';

  ngOnInit() {
    this.getRandom();
  }

  getRandom() {
    this.mealService.getRandomMeal().subscribe({
      next: (response) => {
        this.meal = response;
        console.log('Random meal fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching random meal:', error);
      },
    });
  }

  like() {
    this.animationClass = 'swipe-right';
    setTimeout(() => {
      this.animationClass = '';
      this.getRandom();
    }, 500);
  }

  dislike() {
    this.animationClass = 'swipe-left';
    setTimeout(() => {
      this.animationClass = '';
      this.getRandom();
    }, 500);
  }
}
