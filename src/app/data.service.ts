import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { 

  }

  getIngredients(locole: string){
    switch(locole){
      case 'cn': 
        return this._http.get('assets/data/cooking-ingredients-cn.json');
      default:
        return this._http.get('assets/data/cooking-ingredients.json');
    }
  }

  getFood(locole: string){
    switch(locole){
      case 'cn': 
        return this._http.get('assets/data/food-cn.json');
      default:
        return this._http.get('assets/data/food.json');
    }
  }

  getRecipes(locole: string){
    switch(locole){
      case 'cn': 
        return this._http.get('assets/data/food-recipes-cn.json');
      default:
        return this._http.get('assets/data/food-recipes.json');
    }

  }

  getReallifeReference(){
    return this._http.get('assets/data/reallife-reference.json')
  }



}
