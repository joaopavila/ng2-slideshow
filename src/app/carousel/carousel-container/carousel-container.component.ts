import {Component, OnDestroy, Input} from '@angular/core';
import { SlideComponent } from '../slide/slide.component';

export enum Direction {UNKNOWN, NEXT, PREV}

@Component({
  selector: 'app-carousel-container',
  templateUrl: './carousel-container.component.html',
  styleUrls: ['./carousel-container.component.scss']
})
export class CarouselContainerComponent {

  public slides: Array<SlideComponent> = [];
  private currentInterval: any;
  private isPlaying: boolean;
  private destroyed = false;
  private currentSlide: SlideComponent;
  private _interval: number;

  @Input() public noWrap: boolean;
  @Input() public noPause: boolean;
  @Input() public noTransition: boolean;
  @Input() public bulletNavigation: boolean;
  @Input() public styleBulletNavigation: string;

  @Input() public get interval(): number {
    return this._interval;
  }

    constructor() {
         console.log('Carousel created');
    }

  public set interval(value: number) {
    this._interval = value;
    this.restartTimer();
  }

  public getInstance() {
    return this;
  }

  public select(nextSlide: SlideComponent, direction: Direction = Direction.UNKNOWN) {
    const nextIndex = nextSlide.index;
    if (direction === Direction.UNKNOWN) {
      direction = nextIndex > this.getCurrentIndex() ? Direction.NEXT : Direction.PREV;
    }

    if (nextSlide && nextSlide !== this.currentSlide) {
      this.goNext(nextSlide, direction);
    }
  }

  private goNext(slide: SlideComponent, direction: Direction) {
    if (this.destroyed) {
      return;
    }

    slide.direction = direction;
    slide.active = true;

    if (this.currentSlide) {
      this.currentSlide.direction = direction;
      this.currentSlide.active = false;
    }

    this.currentSlide = slide;

    this.restartTimer();
  }

  private getSlideByIndex(index: number) {
    const len = this.slides.length;
    for (let i = 0; i < len; ++i) {
      if (this.slides[i].index === index) {
        return this.slides[i];
      }
    }
  }

  private getCurrentIndex() {
    return !this.currentSlide ? 0 : this.currentSlide.index;
  }

  private next() {
    const newIndex = (this.getCurrentIndex() + 1) % this.slides.length;

    if (newIndex === 0 && this.noWrap) {
      this.pause();
      return;
    }

    return this.select(this.getSlideByIndex(newIndex), Direction.NEXT);
  }

  private prev() {
    const newIndex = this.getCurrentIndex() - 1 < 0 ? this.slides.length - 1 : this.getCurrentIndex() - 1;

    if (this.noWrap && newIndex === this.slides.length - 1) {
      this.pause();
      return;
    }

    return this.select(this.getSlideByIndex(newIndex), Direction.PREV);
  }

  private restartTimer() {
    this.resetTimer();
    const interval = +this.interval;
    if (!isNaN(interval) && interval > 0) {
      this.currentInterval = setInterval(() => {
        const nInterval = +this.interval;
        if (this.isPlaying && !isNaN(this.interval) && nInterval > 0 && this.slides.length) {
          this.next();
        } else {
          this.pause();
        }
      }, interval);
    }
  }

  private resetTimer() {
    if (this.currentInterval) {
      clearInterval(this.currentInterval);
      this.currentInterval = null;
    }
  }

  public play() {
    if (!this.isPlaying) {
      this.isPlaying = true;
      this.restartTimer();
    }
  }

  public pause() {
    if (!this.noPause) {
      this.isPlaying = false;
      this.resetTimer();
    }
  }

  public createSlide(slide: SlideComponent) {
    slide.index = this.slides.length;
    this.slides.push(slide);
    if (this.slides.length === 1 || slide.active) {
      this.select(this.slides[this.slides.length - 1]);
      if (this.slides.length === 1) {
        this.play();
      }
    } else {
      slide.active = false;
    }
  }

}
