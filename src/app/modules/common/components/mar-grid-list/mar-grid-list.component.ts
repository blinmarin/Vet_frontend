import { Component, Input } from '@angular/core';
import { MarGridListSetting } from './models/mar-grid-list-setting.model';
import { AppointmentList } from 'src/app/modules/appointments/models/appointmentList.model';

@Component({
  selector: 'app-mar-grid-list',
  templateUrl: './mar-grid-list.component.html',
  styleUrls: ['./mar-grid-list.component.scss']
})
export class MarGridListComponent{

  @Input() settings!: MarGridListSetting
  @Input() gridAreas!: string

  sendAppointmentData(a:AppointmentList){
    console.log(a)
  }

}
