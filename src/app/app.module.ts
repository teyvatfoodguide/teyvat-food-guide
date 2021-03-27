import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FooterComponent } from './footer/footer.component';

import { FoodRoutingModule } from './food/food-routing.module';
import { FoodListComponent } from './food/food-list/food-list.component';
import { FoodInfoComponent } from './food/food-info/food-info/food-info.component';

import { FoodDetailComponent } from './food/food-info/food-detail/food-detail.component';
import { ReallifeRecipeComponent } from './food/food-info/reallife-recipe/reallife-recipe.component';

import { CookingIngrediantsRoutingModule } from './cooking-ingrediants/cooking-ingrediants-routing.module';
import { IngrediantListComponent } from './cooking-ingrediants/ingrediant-list/ingrediant-list.component';
import { IngrediantDetailComponent } from './cooking-ingrediants/ingrediant-detail/ingrediant-detail.component';

import { TabModule } from './tab/tab.module';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    FooterComponent,
    FoodListComponent,
    FoodInfoComponent,
    FoodDetailComponent,
    ReallifeRecipeComponent,
    IngrediantListComponent,
    IngrediantDetailComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FoodRoutingModule,
    CookingIngrediantsRoutingModule,
    TabModule,
    NgbModule,
    AppRoutingModule //put it at last to accept all the routers' setting
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
