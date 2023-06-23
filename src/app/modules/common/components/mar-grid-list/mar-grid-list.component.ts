import { Component, Input, OnInit } from '@angular/core';
import { MarGridListSetting } from './models/mar-grid-list-setting.model';
import { Pet } from 'src/app/modules/appointments/models/pet.model';
import { pets } from 'src/data/pet.data';
import { Appointment } from 'src/app/modules/appointments/models/appointment.model';
import { Owner } from 'src/app/modules/appointments/models/owner.model';
import { appointments } from 'src/data/appointment.data';
import { owners } from 'src/data/owner.data';
import { MarAppointmentListModel } from 'src/app/modules/appointments/components/mar-appointment-list/model/mar-appointment-list.model';


@Component({
  selector: 'app-mar-grid-list',
  templateUrl: './mar-grid-list.component.html',
  styleUrls: ['./mar-grid-list.component.scss']
})
export class MarGridListComponent{

  @Input() settings!: MarAppointmentListModel

  // settings!: MarGridListSetting //todo @input

  // items_pets: Pet[] = pets
  // items_owners: Owner[] = owners
  // items_appointments: Appointment[] = appointments

  // ngOnInit(): void {
  //   this.settings = {
  //     name: 'Murka',
  //     headers: ['id', 'pet', 'owner', 'status', 'description'],
  //     data: this.items_appointments
  //   }
  // }

}
