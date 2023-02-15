import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTravelDetailsComponent } from './edit-travel-details.component';

describe('EditTravelDetailsComponent', () => {
  let component: EditTravelDetailsComponent;
  let fixture: ComponentFixture<EditTravelDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTravelDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTravelDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
