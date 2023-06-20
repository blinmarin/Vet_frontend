import { Component } from '@angular/core';
import { Pet } from '../../models/pet.model';
import { pets } from 'src/app/data/pet.data';
import { Owner } from '../../models/owner.model';
import { owners } from 'src/app/data/owner.data';
import { Appointment } from '../../models/appointment.model';
import { appointments } from 'src/app/data/appointment.data';

@Component({
  selector: 'app-mar-list',
  templateUrl: './mar-list.component.html',
  styleUrls: ['./mar-list.component.scss']
})

export class MarListComponent {
  items_pets: Pet[] = pets
  items_owners: Owner[] = owners
  items_appointments: Appointment[] = appointments

  // {
  //   if (status==="registered"){
  //     .style.backgroundColor = "yellow"
  //   }
  // }

  Colorclass(var_status: string) {
    if (var_status==="registered"){
      var element = document.getElementById("status")
      console.log(element)
      // element.classList.add("mystyle");
      }

}
}
