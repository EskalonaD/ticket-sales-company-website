import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PastTripsComponent } from './past-trips.component';

describe('PastTripsComponent', () => {
  let component: PastTripsComponent;
  let fixture: ComponentFixture<PastTripsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PastTripsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PastTripsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
