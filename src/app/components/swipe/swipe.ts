import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Meal } from '../../model/meal.model';
import { MealService } from '../../services/meal.service';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-swipe',
  imports: [CommonModule],
  templateUrl: './swipe.html',
  styleUrl: './swipe.scss',
})
export class Swipe implements OnInit {
  mealService = inject(MealService);
  userService = inject(UserService);

  meal = signal<Meal>({
    name: '',
    image: '',
    ingredients: [],
  });

  animationClass: string = '';

  ngOnInit() {
    this.getRandom();
  }

  getRandom() {
    this.mealService.getRandomMeal().subscribe({
      next: (response) => {
        this.meal.set(response);
        console.log('Random meal fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching random meal:', error);
      },
    });
  }

  like() {
    this.userService.saveMeal(this.meal())?.subscribe({
      next: (response) => {
        console.log('Meal saved successfully:', response);
      },
      error: (error) => {
        console.error('Error saving meal:', error);
      },
    });

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
