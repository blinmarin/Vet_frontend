import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MarAppointmentListComponent } from './components/mar-appointment-list/mar-appointment-list.component';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';
import { MarOwnersListComponent } from './components/mar-owners-list/mar-owners-list.component';
import { MarPetsListComponent } from './components/mar-pets-list/mar-pets-list.component';
import { MarCreateComponent } from './components/mar-create/mar-create.component';


const MarComponents = [
  MarAppointmentListComponent
]

@NgModule({
  declarations: [
    MarComponents,
    MarOwnersListComponent,
    MarPetsListComponent,
    MarCreateComponent,
  ],
  imports: [
    BrowserModule,
    MarCommonModule
  ],
  exports:[
    MarComponents,
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class AppointmentsModule { }
