import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDetailComponent } from './food-detail/food-detail.component';
import { ReallifeRecipeComponent } from './reallife-recipe/reallife-recipe.component';


@NgModule({
  declarations: [
    FoodDetailComponent,
    ReallifeRecipeComponent
  ],
  imports: [
    CommonModule
  ]
})
export class FoodInfoModule { }
