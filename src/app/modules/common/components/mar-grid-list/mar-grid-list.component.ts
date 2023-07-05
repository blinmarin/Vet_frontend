import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarGridListSetting } from './models/mar-grid-list-setting.model';
import { CreateEditData } from 'src/app/modules/appointments/components/mar-appointment-list/models/create-edit-data.model';

@Component({
  selector: 'app-mar-grid-list',
  templateUrl: './mar-grid-list.component.html',
  styleUrls: ['./mar-grid-list.component.scss']
})
export class MarGridListComponent{
  @Output() showDialogClick = new EventEmitter();
  @Output() deleteItemClick = new EventEmitter();

  @Input() settings!: MarGridListSetting
  @Input() gridAreas!: string


  showEditDialog(dat: any){

    let data: CreateEditData ={
      buttonType: 'edit-button',
      itemData: dat
    }
    this.showDialogClick.emit(data)
  }

  deleteItem(dat: any){
    this.deleteItemClick.emit(dat)
  }

}
