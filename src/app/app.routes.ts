import { Routes } from '@angular/router';
import { CreateMeal } from './components/create-meal/create-meal';
import { CreateUser } from './components/create-user/create-user';
import { Login } from './components/login/login';
import { Swipe } from './components/swipe/swipe';

export const routes: Routes = [
  { path: 'create-meal', component: CreateMeal },
  { path: 'create-user', component: CreateUser },
  { path: 'login', component: Login },
  { path: 'swipe', component: Swipe },
];
