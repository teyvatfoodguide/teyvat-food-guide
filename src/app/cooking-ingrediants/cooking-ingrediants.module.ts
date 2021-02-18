import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CookingIngrediantsRoutingModule } from './cooking-ingrediants-routing.module';
import { IngrediantListComponent } from './ingrediant-list/ingrediant-list.component';
import { IngrediantDetailComponent } from './ingrediant-detail/ingrediant-detail.component';


@NgModule({
  declarations: [
    IngrediantListComponent,
    IngrediantDetailComponent
  ],
  imports: [
    CommonModule,
    CookingIngrediantsRoutingModule
  ]
})
export class CookingIngrediantsModule { }
