import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';

import { DataService } from '../../data.service';
import { CookingIngradiant } from 'src/app/Interface/ICookingIngredient';



@Component({
  selector: 'app-ingrediant-detail',
  templateUrl: './ingrediant-detail.component.html',
  styleUrls: ['./ingrediant-detail.component.scss']
})
export class IngrediantDetailComponent implements OnInit {

  name: String
  ingrediants;

  constructor(
    private _route: ActivatedRoute, 
    private _data: DataService
  ) { 
    this.name = this._route.snapshot.params.name

  }

  ngOnInit(): void {
    this._data.getIngrediants().subscribe((data) =>{
      this.ingrediants = <CookingIngradiant> data
    })
  }

}
