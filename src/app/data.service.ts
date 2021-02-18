import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map } from 'rxjs/operators';
import { CookingIngradiant } from './Interface/ICookingIngradiant';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) { 

  }

  getIngrediants(){
    return this._http.get('assets/data/cooking-ingredients.json');
  }

  getIngrediant(name:string){
    var d = this.getIngrediants().pipe(
      map((ingrediants: CookingIngradiant[]) => 
      ingrediants.find(i => i.name == name))
    );
    
    return d
  }

  getFoods(){
    return this._http.get('assets/data/foods.json');
  }

  getRecipes(){
    return this._http.get('assets/data/food-recipes.json');

  }


}
