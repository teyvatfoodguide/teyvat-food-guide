import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component'
import { FoodComponent } from './food/food.component'
import { CookingIngrediantComponent } from './cooking-ingrediant/cooking-ingrediant.component'



const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'food', component: FoodComponent},
  {path: 'cooking-ingrediant', component: CookingIngrediantComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
