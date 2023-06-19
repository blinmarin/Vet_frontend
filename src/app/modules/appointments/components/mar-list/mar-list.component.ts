import { Component } from '@angular/core';
import { Appointments, Status } from '../../models/appointment';
import { AnimalType, Pets } from '../../models/pet';
import { Owner } from '../../models/owner';

@Component({
  selector: 'app-mar-list',
  templateUrl: './mar-list.component.html',
  styleUrls: ['./mar-list.component.scss']
})
export class MarListComponent {

  items_pets: Pets[] = [
    {
      id: 1,
      name: 'Bagira',
      type: AnimalType.cat
    }
  ]

  item_owners: Owner[] = [
    {
      id: 1,
      name: 'Marina',
      phone: '8-800-555-35-35'
    }
]

  items: Appointments[] = [
    {
      id: 1,
      pet: this.items_pets[1],
      owner: this.item_owners[1],
      status: Status.registered,
      description: 'Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов...'
    }
  ]
}
