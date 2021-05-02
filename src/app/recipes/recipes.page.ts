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

  ngOnInit() {
  }

}
