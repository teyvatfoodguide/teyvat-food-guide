import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { CookingIngradiant } from '../../Interface/ICookingIngredient';


@Component({
  selector: 'app-ingrediant-list',
  templateUrl: './ingrediant-list.component.html',
  styleUrls: ['./ingrediant-list.component.scss']
})
export class IngrediantListComponent implements OnInit {

  ingrediants;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this._data.getIngrediants().subscribe((data) =>{
      this.ingrediants = <CookingIngradiant> data
    })
    

  }

}
