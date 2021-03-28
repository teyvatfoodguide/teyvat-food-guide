import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { DataService } from '../../../data.service';


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
  

  constructor(
    private _route: ActivatedRoute,
    private _data: DataService) {
    this.id = this._route.snapshot.params.id
  }

  ngOnInit(): void {
    //get food and its recipe(if has one) based on language
    this.lang = localStorage.getItem('lang') || 'en'
    this._data.getFood(this.lang).subscribe((data) => {
      this.food = data
      this.food.forEach(element => {
        if (element.id == this.id) {
          this.f = element
        }
      });
    })
  }

}
