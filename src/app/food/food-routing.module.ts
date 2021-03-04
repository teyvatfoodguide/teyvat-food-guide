import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FoodListComponent } from './food-list/food-list.component';

const routes: Routes = [
  {
    path: 'food', 
    component: FoodListComponent,
  },
  {
    path: 'food/:name', 
    loadChildren: () => import('./food-info/food-info.module').then(m => m.FoodInfoModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FoodRoutingModule { }
