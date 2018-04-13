import { Component, OnInit, Input, HostBinding, OnDestroy } from '@angular/core';
import { CarouselContainerComponent, Direction } from '../carousel-container/carousel-container.component';

@Component({
  selector: 'app-slide',
  templateUrl: './slide.component.html',
  styleUrls: ['./slide.component.scss']
})
export class SlideComponent implements OnInit {

  @Input() public index: number;
  @Input() public direction: Direction;

  @HostBinding('class.active')
  @Input() public active: boolean;

  @HostBinding('class.item')
  // @HostBinding('class.carousel-item')
  private addClass = true;

  constructor(private carousel: CarouselContainerComponent) {
  }

  public ngOnInit() {
      this.carousel.addSlide(this);
  }

  // public ngOnDestroy() {
  //     this.carousel.removeSlide(this);
  // }

}
