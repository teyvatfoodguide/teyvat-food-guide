import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _httpClient: HttpClient) { }

  ngOnInit(): void {
    this._httpClient.get("assets/data/foods.json").subscribe(data =>{
      console.log(data);
    })
  }

}
