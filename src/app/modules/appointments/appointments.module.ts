import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarAppointmentListComponent } from './components/mar-appointment-list/mar-appointment-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';
import { CreateAppointmentComponent } from './components/create-appointment/create-appointment.component';
import { MarDialogComponent } from './components/mar-dialog/mar-dialog.component';


const MarComponents = [
  MarAppointmentListComponent,
  CreateAppointmentComponent,
]

@NgModule({
  declarations: [
    MarComponents,
    MarDialogComponent,

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
