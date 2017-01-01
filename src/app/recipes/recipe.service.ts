import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';
import { Recipe } from './recipe';
import { Ingredient } from '../shared/ingredient';
// import { Observable } from 'rxjs/Observable'; // <- add this import
import 'rxjs/Rx';
// import { Observable } from 'rxjs/Observable';

@Injectable()
export class RecipeService {
  private recipes: Recipe[] = [
    new Recipe('Schnitzel', 'Very tasty', 'http://www.knorr.com/Images/1020/1020-303062-recipe_chicken-milnese.jpg', [
      new Ingredient('French Fries', 2),
      new Ingredient('Pork Meat', 1)
    ]),
    new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [
      new Ingredient('Meat', 2),
      new Ingredient('Vegetable', 1)
    ])
  ];

  constructor(private http: Http) { }

  getRecipes() {
    return this.recipes;
  }

  getRecipe(id: number) {
    return this.recipes[id];
  }

  deleteRecipe(recipe: Recipe) {
    this.recipes.splice(this.recipes.indexOf(recipe), 1);
  }

  addRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }

  editRecipe(oldRecipe: Recipe, newRecipe: Recipe) {
    this.recipes[this.recipes.indexOf(oldRecipe)] = newRecipe;
  }

  // storeData() {
  //   const body = JSON.stringify(this.recipes);
  //   const headers = new Headers({
  //     'Content-Type': 'application/json'
  //   });
  //   return this.http.put('https://recipebook-3bc83.firebaseio.com/recipes.json', body, { headers: headers });
  // }

  // fetchData() {
  //   return this.http.get('https://recipebook-3bc83.firebaseio.com/recipes.json')
  //     .map((response: Response) => response.json())
  //     .subscribe(
  //     (data: Recipe[]) => {
  //       this.recipes = data;
  //       // this.recipesChanged.emit(this.recipes);
  //     }
  //     );
  // }
}
