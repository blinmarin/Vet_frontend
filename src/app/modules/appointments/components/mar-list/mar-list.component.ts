import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { pets } from 'src/data/pet.data';
import { Owner } from '../../models/owner.model';
import { owners } from 'src/data/owner.data';
import { Appointment } from '../../models/appointment.model';
import { appointments } from 'src/data/appointment.data';

@Component({
  selector: 'app-mar-list',
  templateUrl: './mar-list.component.html',
  styleUrls: ['./mar-list.component.scss']
})

export class MarListComponent {
  items_pets: Pet[] = pets
  items_owners: Owner[] = owners
  items_appointments: Appointment[] = appointments

  AAA(x:any){
    console.log(typeof(x))
  }

  AccordionFlag(elem: HTMLDivElement){
    return (elem.offsetHeight > 100)
  }



}
