import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodRoutingModule } from './food-routing.module';
import { FoodListComponent } from './food-list/food-list.component';
import { FoodInfoComponent } from './food-info/food-info/food-info.component';

import { MatButtonToggleModule } from '@angular/material/button-toggle'; 
import { MatTabsModule } from '@angular/material/tabs'; 


@NgModule({
  declarations: [
    FoodListComponent,
    FoodInfoComponent
  ],
  imports: [
    CommonModule,
    FoodRoutingModule,
    MatButtonToggleModule,
    MatTabsModule
  ]
})
export class FoodModule { }
