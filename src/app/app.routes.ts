import { Routes } from '@angular/router';
import { CreateMeal } from './components/create-meal/create-meal';
import { CreateUser } from './components/create-user/create-user';

export const routes: Routes = [
  { path: 'create-meal', component: CreateMeal },
  { path: 'create-user', component: CreateUser },
];
