import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassengersFormComponent } from './passengers-form.component';

describe('PassengersFormComponent', () => {
  let component: PassengersFormComponent;
  let fixture: ComponentFixture<PassengersFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassengersFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassengersFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
