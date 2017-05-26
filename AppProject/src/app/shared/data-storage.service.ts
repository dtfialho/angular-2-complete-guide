import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipes.model';


@Injectable()
export class DataStorageService {

  constructor(private http: Http, private recipeService: RecipeService) { }

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://ng-recipe-book-5b901.firebaseio.com/recipes.json', recipes);
  }

  getRecipes() {
    this.http.get('https://ng-recipe-book-5b901.firebaseio.com/recipes.json').subscribe(
      (response: Response) => {
        const recipes: Recipe[] = response.json();
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
