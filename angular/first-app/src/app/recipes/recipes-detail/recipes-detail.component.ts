import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipesService } from '../recipes.service';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
  @Input() recipe: Recipe;

  constructor(private recipesService: RecipesService) { }

  ngOnInit() {
  }

  addToSL() {
    this.recipesService.addIngToSL(this.recipe.ingredients);
  }

}
