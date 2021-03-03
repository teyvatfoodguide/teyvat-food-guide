import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';
import { CookingIngradiant } from '../../Interface/ICookingIngradiant';
import { switchMap, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';


@Component({
  selector: 'app-ingrediant-list',
  templateUrl: './ingrediant-list.component.html',
  styleUrls: ['./ingrediant-list.component.scss']
})
export class IngrediantListComponent implements OnInit {

  ingrediants;
  selectedName: string;

  constructor(private _data: DataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._data.getIngrediants().subscribe((data) =>{
      this.ingrediants = <CookingIngradiant> data
    })
    console.log(this.ingrediants)
    

  }

}
