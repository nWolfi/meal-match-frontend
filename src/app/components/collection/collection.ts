import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { Meal } from '../../model/meal.model';

@Component({
  selector: 'app-collection',
  imports: [],
  templateUrl: './collection.html',
  styleUrl: './collection.scss',
})
export class Collection implements OnInit {
  userService = inject(UserService);

  mealCollection: Meal[] = [];

  ngOnInit() {
    this.getCollection();
  }

  getCollection() {
    this.userService.getCollection()?.subscribe({
      next: (response) => {
        this.mealCollection = response;
        console.log('Collection fetched successfully:', response);
      },
      error: (error) => {
        console.error('Error fetching collection:', error);
      },
    });
  }
}
