import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../data.service';
import { Food } from 'src/app/Interface/IFood';
import { FoodPotency, Ingredient, Recipe } from '../../../Interface/IRecipe';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  lang: string;
  id: String;

  food;
  f;

  recipes;
  recipe;
  potencies: FoodPotency[];
  ingreditents: Ingredient[];

  constructor(
    private _route: ActivatedRoute,
    private _data: DataService) {
    this.id = this._route.snapshot.params.id
  }

  ngOnInit(): void {
    //get food and its recipe(if has one) based on language
    this.lang = localStorage.getItem('lang') || 'en'
    this._data.getFood(this.lang).subscribe((data) => {
      this.food = <Food>data
      this.food.forEach(element => {
        if (element.id == this.id) {
          this.f = element
        }
      });
    })
    if (this.f.hasRecipe) {
      this._data.getRecipes(this.lang).subscribe((data) => {
        this.recipes = data

        // this.recipes.forEach(element => {
        //   if (element.id == this.id) {
        //     this.recipe = element
        //     this.potencies = element.foodPotency
        //     this.ingreditents = element.ingredients
        //   }
        // });
      })
    }

  }

}
