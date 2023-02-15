import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinPassengerComponent } from './checkin-passenger.component';

describe('CheckinPassengerComponent', () => {
  let component: CheckinPassengerComponent;
  let fixture: ComponentFixture<CheckinPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
