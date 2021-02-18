import { Component, OnInit } from '@angular/core';
import { DataService } from '../../data.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-ingrediant-detail',
  templateUrl: './ingrediant-detail.component.html',
  styleUrls: ['./ingrediant-detail.component.scss']
})
export class IngrediantDetailComponent implements OnInit {

  constructor(private _data: DataService, private _route: ActivatedRoute) { }

  ngOnInit(): void {
    this._route.params.subscribe(param => {
      console.log(param);
    })
  }

}
