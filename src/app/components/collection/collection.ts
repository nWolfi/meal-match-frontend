import { Component, inject, OnInit, signal } from '@angular/core';
import { UserService } from '../services/user.service';
import { Meal } from '../../model/meal.model';
import { single } from 'rxjs';

@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection implements OnInit {
  userService = inject(UserService);

  mealCollection = signal<Meal[]>([]);

  ngOnInit() {
    this.getCollection();
  }

  getCollection() {
    console.log('Fetching collection for user...');

    this.userService.getCollection()?.subscribe({
      next: (response) => {
        this.mealCollection.set(response.meals);
        console.log('Collection fetched successfully:', response.meals);
      },
      error: (error) => {
        console.error('Error fetching collection:', error);
      },
    });
  }
}
