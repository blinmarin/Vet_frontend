import { Component, EventEmitter, Input, Output } from '@angular/core';
import { selectModel } from './models/grid-select.model';






@Component({
  selector: 'app-mar-select',
  templateUrl: './mar-select.component.html',
  styleUrls: ['./mar-select.component.scss']
})


export class MarSelectComponent {

@Input() typeVariants!: selectModel[];
@Output() typeSelectOption = new EventEmitter<string>();



sendSelectOption(val: string){
  this.typeSelectOption.emit(val)

}




}
