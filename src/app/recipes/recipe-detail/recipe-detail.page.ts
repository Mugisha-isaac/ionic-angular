import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from '../recipe.model';
import {RecipesService} from '../recipes.service';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.page.html',
  styleUrls: ['./recipe-detail.page.scss'],
})
export class RecipeDetailPage implements OnInit {
 loadedRecipe:Recipe;
  constructor(private acivatedRoute:ActivatedRoute, private recipesService:RecipesService) { }

  ngOnInit() {
    this.acivatedRoute.paramMap.subscribe(paraMap=>{
     if(!paraMap.has('recipeId')){
       // redirect the user
       return;
     }
     const recipeId = paraMap.get('recipeId');
     this.loadedRecipe = this.recipesService.getRecipe(recipeId);
    })
  }

}
