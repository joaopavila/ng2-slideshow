import { Component, Input } from '@angular/core';
import { IProperties, ISlides } from './properties.interface';

@Component({
  selector: 'app-ng2-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
  export class CarouselComponent {

  @Input() properties: IProperties;
  @Input() slides: Array<ISlides>;

  constructor() { }

}
