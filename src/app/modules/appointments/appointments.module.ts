import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarListComponent } from './components/mar-list/mar-list.component';


const MarComponents = [
  MarListComponent
]

@NgModule({
  declarations: [
    MarComponents
  ],
  imports: [
    CommonModule
  ],
  exports:[
    MarComponents
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppointmentsModule { }
