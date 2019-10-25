import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MultiTripComponent } from './multi-trip.component';

describe('MultiTripComponent', () => {
  let component: MultiTripComponent;
  let fixture: ComponentFixture<MultiTripComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MultiTripComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MultiTripComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
