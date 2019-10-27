import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OneWayTripComponent } from './one-way-trip.component';

describe('OneWayTripComponent', () => {
  let component: OneWayTripComponent;
  let fixture: ComponentFixture<OneWayTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OneWayTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OneWayTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
