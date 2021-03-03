import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component'
import { FoodDetailComponent } from './food-detail/food-detail.component'

const routes: Routes = [
  {path: 'food', component: FoodListComponent},
  {path: 'food/:name', component: FoodDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
