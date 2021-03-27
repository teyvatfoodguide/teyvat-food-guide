import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { DataService } from '../../data.service';
import { CookingIngredient } from 'src/app/Interface/ICookingIngredient';



@Component({
  selector: 'app-ingrediant-detail',
  templateUrl: './ingrediant-detail.component.html',
  styleUrls: ['./ingrediant-detail.component.scss']
})
export class IngrediantDetailComponent implements OnInit {

  id: String
  ingredients;
  ingredient;
  lang: string;

  constructor(
    private _route: ActivatedRoute, 
    private _data: DataService
  ) { 
    this.id = this._route.snapshot.params.id

  }

  ngOnInit(): void {
    //get data based on language
    this.lang = localStorage.getItem('lang') || 'en' ;
    this._data.getIngredients(this.lang).subscribe((data) =>{
      this.ingredients = <CookingIngredient> data
      this.ingredients.forEach((i: { id: String; }) => {
        if(i.id == this.id){
          this.ingredient = i
        }
      });
    })
  }

}
