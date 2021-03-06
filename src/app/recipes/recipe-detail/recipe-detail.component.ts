import { Component, OnInit, Input } from '@angular/core';
import {Recipe} from '../recipe';
import { ShoppingListService } from '../../shopping-list/shopping-list.service';
import { Subscription } from 'rxjs/Rx';
import { ActivatedRoute, Router } from '@angular/router';
import { RecipeService } from '../recipe.service';

@Component({
  selector: 'rb-recipe-detail',
  templateUrl: './recipe-detail.component.html'
})
export class RecipeDetailComponent implements OnInit {

    private subscription: Subscription;
    private recipeIndex: number;
    selectedRecipe: Recipe;

    constructor(private sls: ShoppingListService,
                private route: ActivatedRoute,
                private recipesService: RecipeService,
                private router: Router) {
    }

  ngOnInit() {
      this.subscription = this.route.params.subscribe(
          (params: any) => {
              this.recipeIndex = params['id'];
              this.selectedRecipe = this.recipesService.getRecipe(this.recipeIndex);
          }
      );
  }


    onDelete() {
        this.recipesService.deleteRecipe(this.selectedRecipe);
        this.router.navigate(['/recipes']);
    }
    onEdit() {
        this.router.navigate(['/recipes', this.recipeIndex, 'edit']);
    }

  onAddToShoppingList() {
      console.log(this.selectedRecipe.ingredients);
    this.sls.addItems(this.selectedRecipe.ingredients);
  }

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnDestroy() {
      this.subscription.unsubscribe();
  }
}
