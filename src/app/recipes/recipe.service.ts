import { Injectable } from '@angular/core';
import {Recipe} from "./recipe";

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-7_edited.jpg', []),
    new Recipe('Summer salad', 'Okay ish', 'http://www.bbcgoodfood.com/sites/default/files/recipe-collections/collection-image/2013/05/beetroot-feta-grain-salad.jpg', [])
  ];
  constructor() { }

  getRecipes(){
    return this.recipes;
  }
}
