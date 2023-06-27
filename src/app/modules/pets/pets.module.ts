import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';
import { MarPetsListComponent } from './components/mar-pets-list/mar-pets-list.component';



const MarComponents = [
  MarPetsListComponent
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

})
export class PetsModule { }
