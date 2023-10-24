import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './homepage/carousel/carousel.component';



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CarouselComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
