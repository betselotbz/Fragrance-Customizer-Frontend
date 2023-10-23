import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PerfumeComponent } from './perfume/perfume.component';
import { CustomFragranceComponent } from './custom-fragrance/custom-fragrance.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { LandingComponent } from './landing/landing.component';



@NgModule({
  declarations: [
    AppComponent,
    PerfumeComponent,
    CustomFragranceComponent,
    IngredientComponent,
    LandingComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
