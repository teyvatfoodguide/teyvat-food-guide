import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../data.service';
import { Food } from 'src/app/Interface/IFood';

@Component({
  selector: 'app-food-info',
  templateUrl: './food-info.component.html',
  styleUrls: ['./food-info.component.scss']
})
export class FoodInfoComponent implements OnInit {

  id: String;
  food;
  lang: string;
  potency = 'normal'


  constructor(private _route: ActivatedRoute, private _data: DataService) { 
    this.id = this._route.snapshot.params.id
  }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
    this._data.getFood(this.lang).subscribe((data) =>{
      this.food = <Food> data
    })
  }

  changePotency(p:string){
    this.potency = p;
  }

}
