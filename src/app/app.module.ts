import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { NavbarComponent } from './homepage/navbar/navbar.component';
import { HomepageComponent } from './homepage/homepage.component';
import { CarouselComponent } from './shared/carousel/carousel.component'; 



@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomepageComponent,
    CarouselComponent
  ],
  imports: [
    BrowserModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
