import { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipesService {
  selectedRecipe = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    // tslint:disable-next-line: max-line-length
    new Recipe('A test Recipe',
    'This is simply a test',
    'https://www.daringgourmet.com/wp-content/uploads/2014/03/Schnitzel-5.jpg',
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]),
    new Recipe('An exciting Recipe',
    'This is simply a test two',
    'https://keyassets-p2.timeincuk.net/wp/prod/wp-content/uploads/sites/53/2019/02/Cheesy-mince-pasta-bake.jpg',
    [
      new Ingredient('Buns', 2),
      new Ingredient('Meat', 4)
    ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngToSL(ing: Ingredient[]) {
  this.slService.addIngredients(ing);
  }

  constructor(private slService: ShoppingListService) { }
}
