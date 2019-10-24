import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ReturnTripComponent } from './return-trip.component';

describe('ReturnTripComponent', () => {
  let component: ReturnTripComponent;
  let fixture: ComponentFixture<ReturnTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ReturnTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ReturnTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
