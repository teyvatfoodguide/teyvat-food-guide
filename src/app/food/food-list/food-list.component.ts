import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { Food } from '../../Interface/IFood';

@Component({
  selector: 'app-food-list',
  templateUrl: './food-list.component.html',
  styleUrls: ['./food-list.component.scss']
})
export class FoodListComponent implements OnInit {

  food;
  lang: string;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en'
    this._data.getFood(this.lang).subscribe((data) =>{
      this.food = <Food> data
    })
    
  }

}
