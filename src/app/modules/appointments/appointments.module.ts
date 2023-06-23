import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MarListComponent } from './components/mar-list/mar-list.component';
import { MarEditButtonComponent } from './components/icons/mar-edit-button/mar-edit-button.component';
import { MarDeleteButtonComponent } from './components/icons/mar-delete-button/mar-delete-button.component';
import { AccordionComponent } from './components/accordion/accordion.component';
import { BrowserModule } from '@angular/platform-browser';


const MarComponents = [
  MarListComponent,
]

@NgModule({
  declarations: [
    MarComponents,

  ],
  imports: [
    CommonModule,
    BrowserModule,
    MarEditButtonComponent,
    MarDeleteButtonComponent,
    AccordionComponent
  ],
  exports:[
    MarComponents
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ]
})
export class AppointmentsModule { }
