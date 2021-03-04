import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodDetailComponent } from './food-detail/food-detail.component';
import { ReallifeRecipeComponent } from './reallife-recipe/reallife-recipe.component';
import { FoodInfoComponent } from './food-info/food-info.component';

const foodListRoutes: Routes = [
  {
    path: '',
    component: FoodInfoComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'detail', component: FoodDetailComponent},
          {path: 'reallife-recipe', component: ReallifeRecipeComponent},
          {path: '', redirectTo: 'detail', pathMatch: 'full'}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(foodListRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class FoodDetailRoutingModule { }
