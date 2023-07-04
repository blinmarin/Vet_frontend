import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarGridListSetting } from './models/mar-grid-list-setting.model';
import { AppointmentList } from 'src/app/modules/appointments/models/appointmentList.model';
import { windowModel } from '../modal-window/models/mar-window.model';
import { CreateEditData } from 'src/app/modules/appointments/components/mar-appointment-list/models/create-edit-data.model';
import { appointments } from 'src/data/appointment.data';




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


  showEditDialog(dat: AppointmentList){

    let data: CreateEditData ={
      buttonType: 'edit-button',
      itemData: dat
    }
    this.showDialogClick.emit(data)
  }

  deleteItem(dat: AppointmentList){
    this.deleteItemClick.emit(dat)
    //appointments.filter((appointments) => appointments.id === dat.id);




    // .afterClosed().subscribe((result)=>{
    //   this.listSettings.data = this.items_appointments.map(this.mapAppointmentList)})
  }

}
