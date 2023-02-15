import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { FlightDetailsComponent } from '../../components/admin/flight-details/flight-details.component';
import { EditPassengerComponent } from '../../components/admin/edit-passenger/edit-passenger.component';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { StoreModule } from '@ngrx/store';
import * as fromAdmin from '../../store/reducers/admin.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AdminEffects } from '../../store/effects/admin.effects';


@NgModule({
  declarations: [
    EditPassengerComponent,
    FlightDetailsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    StoreModule.forFeature(fromAdmin.adminFeatureKey, fromAdmin.reducer),
    EffectsModule.forFeature([AdminEffects])
  ]
})
export class AdminModule { }
