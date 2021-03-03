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
  recipe;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.getFood().subscribe((data) =>{
      this.food = <Food> data
    })
  }

}
