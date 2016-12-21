import { Component, OnInit } from '@angular/core';
import {RecipeListComponent} from './recipe-list/recipe-list.component';
import {RecipeService}  from '../recipes/recipe.service'

@Component({
  selector: 'rb-recipes',
  templateUrl: './recipes.component.html',
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
