import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FlightDetailsComponent } from '../../components/admin/flight-details/flight-details.component';
import { EditPassengerComponent } from '../../components/admin/edit-passenger/edit-passenger.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';


@NgModule({
  declarations: [
    EditPassengerComponent,
    FlightDetailsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
