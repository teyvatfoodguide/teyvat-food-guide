import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-cooking-ingrediant',
  templateUrl: './cooking-ingrediant.component.html',
  styleUrls: ['./cooking-ingrediant.component.scss']
})
export class CookingIngrediantComponent implements OnInit {

  ingrediants: any

  constructor(private _data: DataService) { 
  }

  ngOnInit(): void {
    this._data.getIngrediants().subscribe((data: Object[]) =>{
      this.ingrediants = data
      console.log(this.ingrediants)
    })
  }

}
