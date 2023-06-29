import { Component, EventEmitter, Input, Output } from '@angular/core';
import { typeVariantsMass } from '../../models/grid-select.model';




@Component({
  selector: 'app-mar-grid-select',
  templateUrl: './mar-grid-select.component.html',
  styleUrls: ['./mar-grid-select.component.scss']
})


export class MarGridSelectComponent {

@Input() typeVariants!: typeVariantsMass[];
@Output() typeSelectOption = new EventEmitter<string>();



sendSelectOption(val: string){
  this.typeSelectOption.emit(val)

}




}
