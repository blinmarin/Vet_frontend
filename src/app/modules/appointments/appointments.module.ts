import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarAppointmentListComponent } from './components/mar-appointment-list/mar-appointment-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';


const MarComponents = [
  MarAppointmentListComponent
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
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppointmentsModule { }
