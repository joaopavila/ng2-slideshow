import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular2CarouselComponent } from './angular2-carousel.component';

describe('Angular2CarouselComponent', () => {
  let component: Angular2CarouselComponent;
  let fixture: ComponentFixture<Angular2CarouselComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular2CarouselComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular2CarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
