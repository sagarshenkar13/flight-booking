import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StaffRoutingModule } from './staff-routing.module';
import { CheckinComponent } from 'src/app/components/staff/checkin/checkin.component';
import { CheckinEditComponent } from 'src/app/components/staff/checkin-edit/checkin-edit.component';
import { CheckinPassengerComponent } from 'src/app/components/staff/checkin-passenger/checkin-passenger.component';
import { EditTravelDetailsComponent } from 'src/app/components/staff/edit-travel-details/edit-travel-details.component';
import { InFlightComponent } from 'src/app/components/staff/in-flight/in-flight.component';
import { InflightPassengerComponent } from 'src/app/components/staff/inflight-passenger/inflight-passenger.component';
import { SeatLayoutComponent } from 'src/app/components/staff/seat-layout/seat-layout.component';


@NgModule({
  declarations: [
    CheckinComponent,
    CheckinEditComponent,
    CheckinPassengerComponent,
    EditTravelDetailsComponent,
    InFlightComponent,
    InflightPassengerComponent,
    SeatLayoutComponent
  ],
  imports: [
    CommonModule,
    StaffRoutingModule,
  ]
})
export class StaffModule { }
