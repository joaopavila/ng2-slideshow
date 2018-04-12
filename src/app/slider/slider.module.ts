
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Angular2CarouselComponent } from './angular2-carousel/angular2-carousel.component';
import { SlideComponent } from './slide/slide.component';
import { CarouselComponent } from './carousel/carousel.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [Angular2CarouselComponent, CarouselComponent, SlideComponent],
  exports: [Angular2CarouselComponent, CarouselComponent, SlideComponent]
})
export class SliderModule { }
