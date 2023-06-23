import { Component, OnInit } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { pets } from 'src/data/pet.data';
import { Owner } from '../../models/owner.model';
import { owners } from 'src/data/owner.data';
import { Appointment } from '../../models/appointment.model';
import { appointments } from 'src/data/appointment.data';


@Component({
  selector: 'app-mar-appointment-list',
  templateUrl: './mar-appointment-list.component.html',
  styleUrls: ['./mar-appointment-list.component.scss']
})

export class MarAppointmentListComponent{
  // mass!: MarAppointmentList

  items_pets: Pet[] = pets
  items_owners: Owner[] = owners
  items_appointments: Appointment[] = appointments

  // ngOnInit(): void {
  //   this.mass = {
  //     name: 'Appointments',
  //     headers: ['id', 'pet', 'owner', 'status', 'description'],
  //     data: this.items_appointments,
  //   };
  // }

  AccordionFlag(elem: HTMLDivElement){
    return (elem.offsetHeight > 100)
  }

  sayAAA(event: string, a:string){
    alert(event + " " + a)
  }

  sayBBB(event: Pet){
    alert(event.name)
  }



}
