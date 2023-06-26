import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MarGridListComponent } from './components/mar-grid-list/mar-grid-list.component';
import { MarAccordionComponent } from './components/accordion/accordion.component';
import { MarDeleteButtonComponent } from './components/icons-button/mar-delete-button/mar-delete-button.component';
import { MarEditButtonComponent } from './components/icons-button/mar-edit-button/mar-edit-button.component';


const MarComponents = [
  MarAccordionComponent,
  MarGridListComponent,
  MarEditButtonComponent,
  MarDeleteButtonComponent
]

@NgModule({
  declarations: [
    MarComponents,
  ],
  imports: [
    CommonModule,
    CdkAccordionModule,
    MatIconModule
  ],
  exports:[
    MarComponents,
  ],
  // schemas: [
  //   CUSTOM_ELEMENTS_SCHEMA
  // ]
})
export class MarCommonModule { }
