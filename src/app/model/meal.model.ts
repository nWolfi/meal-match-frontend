import { Ingredient } from './ingredient.model';

export interface Meal {
  id?: number;
  name: string;
  image: string;
  ingredients: Ingredient[];
}
