import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';
import { MarPetsListComponent } from './components/mar-pets-list/mar-pets-list.component';
import { CreatePetComponent } from './components/create-pet/create-pet.component';



const MarComponents = [
  MarPetsListComponent
]

@NgModule({
  declarations: [
    MarComponents,
    CreatePetComponent,
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
