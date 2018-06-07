import { Component, OnInit, Input, HostBinding, OnDestroy } from '@angular/core';
import { CarouselContainerComponent, Direction } from '../carousel-container/carousel-container.component';

@Component({
  selector: 'lib-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() public index: number;
  @Input() public direction: Direction;
  @Input() public active: boolean;

  @HostBinding('class.active')
  @HostBinding('class.item')

  public addClass = true;

  constructor(private carousel: CarouselContainerComponent) {
  }

  public ngOnInit() {
      this.carousel.createSlide(this);
  }

}
