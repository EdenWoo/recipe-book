import { RecipeService } from '../recipes/recipe.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'rb-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent implements OnInit {

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

  onStore() {
    this.recipeService.storeData().subscribe(
      data => console.log(data),
      err => console.log(err)
    );
  }
}
