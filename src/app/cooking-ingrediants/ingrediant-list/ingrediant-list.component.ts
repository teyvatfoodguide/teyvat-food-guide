import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-ingrediant-list',
  templateUrl: './ingrediant-list.component.html',
  styleUrls: ['./ingrediant-list.component.scss']
})
export class IngrediantListComponent implements OnInit {

  ingrediants: Object[]
  selectedName: string;

  constructor(private _data: DataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._data.getIngrediants().subscribe((data: Object[]) =>{
      this.ingrediants = data
      console.log(this.ingrediants)
      
    })
  

  }

}
