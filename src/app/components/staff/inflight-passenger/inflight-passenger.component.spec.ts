import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InflightPassengerComponent } from './inflight-passenger.component';

describe('InflightPassengerComponent', () => {
  let component: InflightPassengerComponent;
  let fixture: ComponentFixture<InflightPassengerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InflightPassengerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InflightPassengerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
