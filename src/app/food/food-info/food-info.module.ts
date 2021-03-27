import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FoodDetailComponent } from './food-detail/food-detail.component';
import { ReallifeRecipeComponent } from './reallife-recipe/reallife-recipe.component';

// import { MatTabsModule } from '@angular/material/tabs'; 
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { TabsComponent } from '../../tab/tabs.component'; 
import { TabComponent } from '../../tab/tab.component';
// import { TabModule } from '../../tab/tab.module';

@NgModule({
  declarations: [
    FoodDetailComponent,
    ReallifeRecipeComponent,
    TabComponent,
    TabsComponent
  ],
  imports: [
    CommonModule,
    // MatTabsModule,
    BrowserAnimationsModule,
    // TabModule
  ]
})
export class FoodInfoModule { }
