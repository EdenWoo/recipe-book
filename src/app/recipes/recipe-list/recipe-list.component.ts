import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe';
import {RecipeItemComponent} from './recipe-item.component';
import {RecipeService}  from '../recipe.service'

@Component({
  selector: 'rb-recipe-list',
  templateUrl: './recipe-list.component.html'
})
export class RecipeListComponent implements OnInit {
  // recipes: Recipe[] = [
  //   new Recipe('Schnitzel', 'Very tasty', 'http://images.derberater.de/files/imagecache/456xXXX_berater/berater/slides/WienerSchnitzel.jpg', []),
  //   new Recipe('Summer Salad', 'Okayish', 'http://ohmyveggies.com/wp-content/uploads/2013/06/the_perfect_summer_salad.jpg', [])
  // ];
  recipes: Recipe[] =[];
  @Output() recipeSelected = new EventEmitter<Recipe>();

  constructor(private recipeService : RecipeService) {
    this.recipes = this.recipeService.getRecipes()
  }

  ngOnInit() {
  }

  onSelected(recipe : Recipe){
    this.recipeSelected.emit(recipe);
  }
}
