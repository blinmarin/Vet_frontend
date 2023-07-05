import { Component, EventEmitter, Output } from '@angular/core';
import { windowModel } from '../modal-window/models/mar-window.model';
import { AppointmentList } from 'src/app/modules/appointments/models/appointmentList.model';
import { CreateEditData } from 'src/app/modules/appointments/components/mar-appointment-list/models/create-edit-data.model';
import { AppointmentStatus } from 'src/app/modules/appointments/models/appointment.model.enum';
import { AnimalType } from 'src/app/modules/pets/models/pet.model.enum';



@Component({
  selector: 'app-mar-grid-panel',
  templateUrl: './mar-grid-panel.component.html',
  styleUrls: ['./mar-grid-panel.component.scss']
})
export class MarGridPanelComponent {
  @Output() showDialogClick = new EventEmitter();








  showDialog(){
    this.showDialogClick.emit()
  }



}
