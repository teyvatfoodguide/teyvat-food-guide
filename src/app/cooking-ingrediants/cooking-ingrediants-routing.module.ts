import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IngrediantListComponent } from './ingrediant-list/ingrediant-list.component';
import { IngrediantDetailComponent } from './ingrediant-detail/ingrediant-detail.component';

const routes: Routes = [
  {path: 'ingrediants', component: IngrediantListComponent},
  {path: 'ingrediant/:name', component: IngrediantDetailComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CookingIngrediantsRoutingModule { }
