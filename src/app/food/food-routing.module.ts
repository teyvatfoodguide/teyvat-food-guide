import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FoodListComponent } from './food-list/food-list.component';
import { FoodDetailComponent } from './food-info/food-detail/food-detail.component'
import { ReallifeRecipeComponent } from './food-info/reallife-recipe/reallife-recipe.component';
import { FoodInfoComponent } from './food-info/food-info/food-info.component';


const routes: Routes = [
  {
    path: 'food', 
    component: FoodListComponent,
  },
  {
    path: 'food/:id',
    component: FoodInfoComponent,
    children: [
      {
        path: '',
        children: [
          {path: 'detail', component: FoodDetailComponent},
          {path: 'reallife-recipe', component: ReallifeRecipeComponent}
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
