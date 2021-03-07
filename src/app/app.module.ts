import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CookingIngrediantsModule } from './cooking-ingrediants/cooking-ingrediants.module';
import { FoodModule } from './food/food.module'; 
import { FoodInfoModule } from './food/food-info/food-info.module';
import { MaterialModule } from'./material/material.module';

import { FooterComponent } from './footer/footer.component'; 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MaterialModule,
    CookingIngrediantsModule,
    FoodModule,
    FoodInfoModule,

    AppRoutingModule //put it at last to accept all the routers' setting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
