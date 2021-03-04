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

  name: String;
  food;

  constructor(private _route: ActivatedRoute, private _data: DataService) { 
    this.name = this._route.snapshot.params.name
  }

  ngOnInit(): void {
    this._data.getFood().subscribe((data) =>{
      this.food = <Food> data
    })
  }

}
