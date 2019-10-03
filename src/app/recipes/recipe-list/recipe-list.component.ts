import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {

  recipe: Recipe[] = [
    new Recipe("Chicken Gravy","Using Chicken to do this Recipe","https://files.hungryforever.com/wp-content/uploads/2017/06/24113702/butter-chicken-gravy.jpg"),
    new Recipe("Mutton Gravy","Using Mutton to do this Recipe","https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Pooja_Thakur/Dabha_mutton.jpg")
  ];
  constructor() { }

  ngOnInit() {
  }

}
