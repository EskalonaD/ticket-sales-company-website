import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainTicketsComponent } from './main-tickets.component';

describe('MainTicketsComponent', () => {
  let component: MainTicketsComponent;
  let fixture: ComponentFixture<MainTicketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainTicketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainTicketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
