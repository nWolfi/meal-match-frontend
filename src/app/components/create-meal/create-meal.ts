import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-create-meal',
  imports: [FormsModule],
  templateUrl: './create-meal.html',
  styleUrl: './create-meal.scss',
})
export class CreateMeal {
  mealNameText: string = 'gfngf';

  createMeal() {
    console.log('Creating meal:', this.mealNameText);
    this.mealNameText = 'text wurde geändert';
  }

  log() {
    console.log(this.mealNameText);
  }
}
