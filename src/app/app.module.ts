import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CookingIngrediantsModule } from './cooking-ingrediants/cooking-ingrediants.module';
import { FoodModule } from './food/food.module'; 
import { FoodInfoModule } from './food/food-info/food-info.module';

import { MatGridListModule } from '@angular/material/grid-list'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatGridListModule,
    BrowserAnimationsModule,

    CookingIngrediantsModule,
    FoodModule,
    FoodInfoModule,

    AppRoutingModule //put it at last to accept all the routers' setting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
