import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../data.service';

@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.component.html',
  styleUrls: ['./food-info.component.scss']
})
export class FoodInfoComponent implements OnInit {

  id: String;
  food;
  f;
  normal;
  delicious;
  suspicious;

  lang: string;


  constructor(private _route: ActivatedRoute, private _data: DataService) { 
    this.id = this._route.snapshot.params.id
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
    this._data.getFood(this.lang).subscribe((data) =>{
      this.food = data
      this.food.forEach(element => {
        if(element.id == this.id){
          this.f = element
        }
      });
      this.f.foodPotency.forEach(element => {
        if(element.type == "Normal"){
          this.normal = element;
        }
        if(element.type == "Delicious"){
          this.delicious = element;
        }
        if(element.type == "Suspicious"){
          this.suspicious = element;
        }
      });
    })
  }

}
