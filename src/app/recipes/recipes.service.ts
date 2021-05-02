import { Injectable } from '@angular/core';
import {Recipe} from './recipe.model';
@Injectable({
  providedIn: 'root'
})
export class RecipesService {
 private recipes: Recipe[] = [
    {
      id:'r1',
      title:'Schnitzer',
      imageUrl:'https://media-cdn.tripadvisor.com/media/photo-s/10/b7/14/b4/chicken-schnitzer-with.jpg',
      ingredients:['Frensh Fries','Pork meat','Salad']
    },
    {
      id:'r2',
      title:'Spaghetti',
      imageUrl:'https://img.taste.com.au/kmT_aJW8/taste/2016/11/spaghetti-with-tuna-sauce-13068-1.jpeg',
      ingredients:['spaghettin','meat','tomatoes'],
    }
  ]
  constructor() { }

  getAllRecipes(){
    return [...this.recipes];
  }

  getRecipe(recipeId:string){
   return {...this.recipes.find(recipe=>{
     return recipe.id===recipeId;
   })};
  }
  deleteRecipe(recipId:string){
   this.recipes = this.recipes.filter(recipe=>{
    return recipe.id !== recipId;
   })
  }
}
