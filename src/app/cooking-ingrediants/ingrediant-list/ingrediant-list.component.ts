import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';

@Component({
  selector: 'app-ingrediant-list',
  templateUrl: './ingrediant-list.component.html',
  styleUrls: ['./ingrediant-list.component.scss']
})
export class IngrediantListComponent implements OnInit {

  lang: string;
  ingredients;

  constructor(private _data: DataService) { }

  ngOnInit(): void {
    this.lang = localStorage.getItem('lang') || 'en' ;
    this._data.getIngredients(this.lang).subscribe((data) =>{
      this.ingredients = data
    })
    

  }

}
