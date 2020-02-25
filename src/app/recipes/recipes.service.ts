import { Injectable } from "@angular/core";
import { Subject } from "rxjs";
import { HttpClient } from "@angular/common/http";

import { Recipe } from "./Recipe.model";

@Injectable({ providedIn: "root" })
export class RecipesService {
  private recipes: Recipe[] = [];
  private recipesUpdated = new Subject<Recipe[]>();

  constructor(private http: HttpClient) {}

  getRecipes() {
    this.http
      .get<{ success: string; count: number; data: Recipe[] }>(
        "http://localhost:5000/api/v1/recipes"
      )
      .subscribe(recipeData => {
        this.recipes = recipeData.data;
        this.recipesUpdated.next([...this.recipes]);
      });
  }

  getRecipeUpdateListener() {
    return this.recipesUpdated.asObservable();
  }

  addRecipe() {}
}
