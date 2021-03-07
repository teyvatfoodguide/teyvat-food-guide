import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../data.service';
import { Food } from 'src/app/Interface/IFood';
import { Recipe } from '../../../Interface/IRecipe';


@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  id: String;
  food;
  recipes;
  lang: string;

  constructor(
    private _route: ActivatedRoute, 
    private _data: DataService) {
      this.id = this._route.snapshot.params.id
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'

    this._data.getFood(this.lang).subscribe((data) =>{
      this.food = <Food> data
    })
    this._data.getRecipes(this.lang).subscribe((data) =>{
      this.recipes = <Recipe> data
    })
  }

}
