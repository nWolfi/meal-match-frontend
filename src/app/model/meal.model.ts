import { Ingredient } from './ingredient.model';

export interface Meal {
  name: string;
  ingredients: Ingredient[];
  imageBytes?: Uint8Array | null;
}
