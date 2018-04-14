import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-ng2-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
  export class CarouselComponent {

  @Input() photoInterval: Number;
  @Input() loopSlides: boolean;
  @Input() slides: Array<object>;
  @Input() bulletNavigation: boolean;
  @Input() textInformation: boolean;
  @Input() styleBulletNavigation: string;

  constructor() { }

}
