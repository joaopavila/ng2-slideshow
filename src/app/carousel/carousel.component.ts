import { Component, OnInit, Input } from '@angular/core';

interface ISlides {
  image: string;
  text: string;
  active: string;
}

@Component({
  selector: 'app-ng2-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
  export class CarouselComponent {

  @Input() photoInterval: Number;
  @Input() loopSlides: boolean;
  @Input() slides: Array<ISlides>;
  @Input() bulletNavigation: boolean;
  @Input() textInformation: boolean;
  @Input() styleBulletNavigation: string;

  constructor() { }

}
