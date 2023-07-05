import { NgModule } from '@angular/core';
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
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MarSelectComponent } from './components/mar-select/mar-select.component';


const MarComponents = [
  MarAccordionComponent,
  MarGridListComponent,
  MarEditButtonComponent,
  MarDeleteButtonComponent,
  MarGridTemplateComponent,
  MarCreateButtonComponent,
  MarGridPanelComponent,
  MarSelectComponent,
]

@NgModule({
  declarations: [
    MarComponents
  ],
  imports: [
    CommonModule,
    CdkAccordionModule,
    MatIconModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule,
  ],

  exports:[
    MarComponents,
  ],

})
export class MarCommonModule { }
