import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDetailComponent } from './food-detail/food-detail.component';
import { ReallifeRecipeComponent } from './reallife-recipe/reallife-recipe.component';
import { FoodDetailRoutingModule } from "./food-info-routing.module";


@NgModule({
  declarations: [
    FoodDetailComponent,
    ReallifeRecipeComponent
  ],
  imports: [
    CommonModule,
    FoodDetailRoutingModule
  ]
})
export class FoodInfoModule { }
