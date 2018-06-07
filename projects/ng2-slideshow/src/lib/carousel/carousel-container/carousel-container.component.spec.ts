import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselContainerComponent } from './carousel-container.component';

describe('CarouselContainerComponent', () => {
  let component: CarouselContainerComponent;
  let fixture: ComponentFixture<CarouselContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarouselContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
