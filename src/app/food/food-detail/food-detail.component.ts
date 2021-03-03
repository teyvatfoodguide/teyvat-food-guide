import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { DataService } from '../../data.service';
import { Food } from 'src/app/Interface/IFood';

@Component({
  selector: 'app-food-detail',
  templateUrl: './food-detail.component.html',
  styleUrls: ['./food-detail.component.scss']
})
export class FoodDetailComponent implements OnInit {

  name: String;
  food;

  constructor(
    private _route: ActivatedRoute, 
    private _data: DataService) {
      this.name = this._route.snapshot.params.name
  }

  ngOnInit(): void {
    this._data.getFood().subscribe((data) =>{
      this.food = <Food> data
    })
  }

}
