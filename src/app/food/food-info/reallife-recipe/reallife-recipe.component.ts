import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../../../data.service';

@Component({
  selector: 'app-reallife-recipe',
  templateUrl: './reallife-recipe.component.html',
  styleUrls: ['./reallife-recipe.component.scss']
})
export class ReallifeRecipeComponent implements OnInit {

  id: String;
  ref: any;
  list;

  constructor(private _route: ActivatedRoute, private _data: DataService) { 
    this.id = this._route.snapshot.params.id
  }

  ngOnInit(): void {
    this._data.getReallifeReference().subscribe((data) => {
      this.ref = data
      this.ref.forEach(element => {
        if(element.id == this.id){
          this.list = element;
        }
      });
      
    })
  }

}
