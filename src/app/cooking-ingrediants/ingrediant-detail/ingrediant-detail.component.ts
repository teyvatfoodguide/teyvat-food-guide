import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap} from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

import { DataService } from '../../data.service';
import { CookingIngradiant } from 'src/app/Interface/ICookingIngradiant';



@Component({
  selector: 'app-ingrediant-detail',
  templateUrl: './ingrediant-detail.component.html',
  styleUrls: ['./ingrediant-detail.component.scss']
})
export class IngrediantDetailComponent implements OnInit {

  ingrediant: Observable<CookingIngradiant>

  constructor(
    private _router: Router, 
    private _route: ActivatedRoute, 
    private _data: DataService
  ) { }

  ngOnInit(): void {
    this.ingrediant = this._route.paramMap.pipe(
      switchMap((params: ParamMap) =>
        this._data.getIngrediant(params.get('name')))
    );
    console.log("data is " + this.ingrediant)
  }

}
