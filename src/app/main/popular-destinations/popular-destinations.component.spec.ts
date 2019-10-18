import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularDestinationsComponent } from './popular-destinations.component';

describe('PopularDestinationsComponent', () => {
  let component: PopularDestinationsComponent;
  let fixture: ComponentFixture<PopularDestinationsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopularDestinationsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopularDestinationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
