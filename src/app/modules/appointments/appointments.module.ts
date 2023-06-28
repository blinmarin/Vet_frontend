import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarAppointmentListComponent } from './components/mar-appointment-list/mar-appointment-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';


const MarComponents = [
  MarAppointmentListComponent,
  CreateAppointmentComponent,
]

@NgModule({
  declarations: [
    MarComponents,
  ],
  imports: [
    BrowserModule,
    MarCommonModule
  ],
  exports:[
    MarComponents,
  ],
})
export class AppointmentsModule { }
