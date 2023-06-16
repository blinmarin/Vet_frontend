import { NgModule } from '@angular/core';
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
  ]
})
export class AppointmentsModule { }
