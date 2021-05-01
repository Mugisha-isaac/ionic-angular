import { Component, OnInit } from '@angular/core';
import {Recipe} from './recipe.model';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.page.html',
  styleUrls: ['./recipes.page.scss'],
})
export class RecipesPage implements OnInit {

  recipes: Recipe[] = [
    {
      id:'r1',
      title:'Schnitzer',
      imageUrl:'C:\Users\Mugisha\Desktop\projects\Ishema\ishema\src\assets\cup.jpg',
      ingredients:['Frensh Fries','Pork meat','Salad']
    },
    {
      id:'r2',
      title:'Spaghetti',
      imageUrl:'C:\Users\Mugisha\Desktop\projects\Ishema\ishema\src\assets\cup.jpg',
      ingredients:['spaghettin','meat','tomatoes'],
    }
  ]
  constructor() { }

  ngOnInit() {
  }

}
