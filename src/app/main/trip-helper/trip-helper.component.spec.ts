import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TripHelperComponent } from './trip-helper.component';

describe('TripHelperComponent', () => {
  let component: TripHelperComponent;
  let fixture: ComponentFixture<TripHelperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TripHelperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TripHelperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
