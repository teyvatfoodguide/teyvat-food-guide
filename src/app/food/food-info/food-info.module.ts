import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodInfoComponent } from './food-info/food-info.component';
import { FoodDetailComponent } from './food-detail/food-detail.component';
import { ReallifeRecipeComponent } from './reallife-recipe/reallife-recipe.component';
import { FoodDetailRoutingModule } from "./food-info-routing.module";

import { MatGridListModule } from '@angular/material/grid-list'; 


@NgModule({
  declarations: [
    FoodDetailComponent,
    ReallifeRecipeComponent
  ],
  imports: [
    CommonModule,
    FoodDetailRoutingModule,
    MatGridListModule
  ]
})
export class FoodInfoModule { }
