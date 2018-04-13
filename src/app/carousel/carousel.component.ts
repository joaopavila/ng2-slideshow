import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ng2-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
  export class CarouselComponent {
// The time to show the next photo
  private NextPhotoInterval = 3000;
// Looping or not
  private noLoopSlides = false;
// Photos
  private slides: Array<any> = [];

  constructor() {
          this.addNewSlide();
  }

  private addNewSlide() {
      this.slides.push(
          {image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car1.jpg', text: 'BMW 1'},
          {image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car2.jpg', text: 'BMW 2'},
          {image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car3.jpg', text: 'BMW 3'},
          {image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car4.jpg', text: 'BMW 4'},
          {image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car5.jpg', text: 'BMW 5'},
          {image: 'http://www.angulartypescript.com/wp-content/uploads/2016/03/car6.jpg', text: 'BMW 6'}
      );
  }

  private removeLastSlide() {
      this.slides.pop();
  }

}
