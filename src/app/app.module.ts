import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { MatTableModule } from '@angular/material/table';
import { FoodComponent } from './food/food.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

import { CookingIngrediantsModule } from './cooking-ingrediants/cooking-ingrediants.module';
import { FoodModule } from './food/food.module' 


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FoodComponent,
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MatTableModule,
    CookingIngrediantsModule,
    FoodModule,
    AppRoutingModule //put it at last to accept all the routers' setting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
