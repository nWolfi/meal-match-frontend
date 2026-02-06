import { Routes } from '@angular/router';
import { CreateMeal } from './components/create-meal/create-meal';
import { CreateUser } from './components/create-user/create-user';
import { Login } from './components/login/login';
import { Swipe } from './components/swipe/swipe';
import { StartPage } from './components/start-page/start-page';
import { AuthGuard } from './guards/auth.guard';

export const routes: Routes = [
  { path: '', component: StartPage },
  { path: 'create-meal', component: CreateMeal, canActivate: [AuthGuard] },
  { path: 'create-user', component: CreateUser, canActivate: [AuthGuard] },
  { path: 'login', component: Login },
  { path: 'swipe', component: Swipe, canActivate: [AuthGuard] },
];
