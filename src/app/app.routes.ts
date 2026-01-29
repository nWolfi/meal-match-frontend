import { Routes } from '@angular/router';
import { CreateMeal } from './components/create-meal/create-meal';
import { CreateUser } from './components/create-user/create-user';
import { Login } from './components/login/login';
import { StartPage } from './components/start-page/start-page';

export const routes: Routes = [
  { path: '', component: StartPage },
  { path: 'create-meal', component: CreateMeal },
  { path: 'create-user', component: CreateUser },
  { path: 'login', component: Login },
];
