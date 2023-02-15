import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckinEditComponent } from './checkin-edit.component';

describe('CheckinEditComponent', () => {
  let component: CheckinEditComponent;
  let fixture: ComponentFixture<CheckinEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CheckinEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckinEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
