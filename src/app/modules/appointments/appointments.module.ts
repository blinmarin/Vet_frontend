import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarAppointmentListComponent } from './components/mar-appointment-list/mar-appointment-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';
import { MarCreateComponent } from './components/mar-create/mar-create.component';


const MarComponents = [
  MarAppointmentListComponent
]

@NgModule({
  declarations: [
    MarComponents,
    MarCreateComponent,
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
