import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarListComponent } from './components/mar-list/mar-list.component';
import { MarEditButtonComponent } from './components/icons/mar-edit-button/mar-edit-button.component';
import { MarDeleteButtonComponent } from './components/icons/mar-delete-button/mar-delete-button.component';


const MarComponents = [
  MarListComponent,
]

@NgModule({
  declarations: [
    MarComponents
  ],
  imports: [
    CommonModule,
    MarEditButtonComponent,
    MarDeleteButtonComponent
  ],
  exports:[
    MarComponents
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppointmentsModule { }
