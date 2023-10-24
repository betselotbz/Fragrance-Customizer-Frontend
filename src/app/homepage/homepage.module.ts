// app/homepage/homepage.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './homepage.component';
import { SharedModule } from '../shared/shared.module';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  declarations: [HomepageComponent],
  imports: [CommonModule, SharedModule, CarouselComponent],
})
export class HomepageModule {}
