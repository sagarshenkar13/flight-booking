import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedRoutingModule } from './shared-routing.module';
import { NavbarComponent } from 'src/app/components/shared/navbar/navbar.component';
import { FooterComponent } from 'src/app/components/shared/footer/footer.component';
import { LoginComponent } from 'src/app/components/shared/login/login.component';
import { PassengersComponent } from 'src/app/components/shared/passengers/passengers.component';
import { PlanesComponent } from 'src/app/components/shared/planes/planes.component';
import { HomeComponent } from 'src/app/components/shared/home/home.component';


@NgModule({
  declarations: [
    NavbarComponent,
    FooterComponent,
    LoginComponent,
    PassengersComponent,
    PlanesComponent,
    HomeComponent
  ],
  imports: [
    CommonModule,
    SharedRoutingModule
  ]
})
export class SharedModule { }
