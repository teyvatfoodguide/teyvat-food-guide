import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { 

  }

  getIngrediants(){
    return this._http.get('assets/data/cooking-ingredients.json');
  }

  getFoods(){
    return this._http.get('assets/data/foods.json');
  }

  getRecipes(){
    return this._http.get('assets/data/food-recipes.json');

  }


}
