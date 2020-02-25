import { Component, OnInit, OnDestroy } from "@angular/core";
import { Subscription } from "rxjs";

import { RecipesService } from "../recipes.service";
import { Recipe } from "../Recipe.model";

@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
})
export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[] = [];
  private recipesSub: Subscription;

  constructor(public recipesService: RecipesService) {}

  ngOnInit() {
    this.recipesService.getRecipes();
    this.recipesSub = this.recipesService
      .getRecipeUpdateListener()
      .subscribe((recipes: Recipe[]) => {
        this.recipes = recipes;
      });
  }

  ngOnDestroy() {
    this.recipesSub.unsubscribe();
  }
}
