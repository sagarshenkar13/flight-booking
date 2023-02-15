import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from 'src/app/components/admin/admin.component';
import { FlightDetailsComponent } from 'src/app/components/admin/flight-details/flight-details.component';

const routes: Routes = [{ path: '', component: AdminComponent },
{
  path:'flightDetails', component: FlightDetailsComponent
}];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
