
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CarouselComponent } from './carousel.component';
import { SlideComponent } from './slide/slide.component';
import { CarouselContainerComponent } from './carousel-container/carousel-container.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [CarouselComponent, CarouselContainerComponent, SlideComponent],
  exports: [
    CarouselComponent
  ]
})
export class CarouselModule { }
