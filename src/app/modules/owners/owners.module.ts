import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MarCommonModule } from '../common/common.module';
import { MarOwnersListComponent } from './components/mar-owners-list/mar-owners-list.component';
import { CreateOwnerComponent } from './components/create-owner/create-owner.component';

const MarComponents = [
  MarOwnersListComponent
]

@NgModule({
  declarations: [
    MarComponents,
    CreateOwnerComponent,
  ],
  imports: [
    BrowserModule,
    MarCommonModule
  ],
  exports:[
    MarComponents,
  ],

})
export class OwnersModule { }
