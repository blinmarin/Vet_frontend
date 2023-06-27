import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkAccordionModule } from '@angular/cdk/accordion';
import { MatIconModule } from '@angular/material/icon';
import { MarGridListComponent } from './components/mar-grid-list/mar-grid-list.component';
import { MarAccordionComponent } from './components/accordion/accordion.component';
import { MarDeleteButtonComponent } from './components/icons-button/mar-delete-button/mar-delete-button.component';
import { MarEditButtonComponent } from './components/icons-button/mar-edit-button/mar-edit-button.component';
import { MarGridTemplateComponent } from './components/mar-grid-template/mar-grid-template.component';
import { MarCreateButtonComponent } from './components/icons-button/mar-create-button/mar-create-button.component';
import { MarGridPanelComponent } from './components/mar-grid-panel/mar-grid-panel.component';


const MarComponents = [
  MarAccordionComponent,
  MarGridListComponent,
  MarEditButtonComponent,
  MarDeleteButtonComponent,
  MarGridTemplateComponent,
  MarCreateButtonComponent,
  MarGridPanelComponent,
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

})
export class MarCommonModule { }
