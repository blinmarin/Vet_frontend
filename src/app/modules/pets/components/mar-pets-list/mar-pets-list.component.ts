import { Component } from '@angular/core';
import { MarGridListSetting } from 'src/app/modules/common/components/mar-grid-list/models/mar-grid-list-setting.model';
import { Pet } from '../../models/pet.model';
import { pets } from 'src/data/pet.data';
import { PetList } from '../../models/petList.model';

@Component({
  selector: 'app-mar-pets-list',
  templateUrl: './mar-pets-list.component.html',
  styleUrls: ['./mar-pets-list.component.scss']
})

export class MarPetsListComponent {
  listSettings !: MarGridListSetting;

  mapPetList(pet_item:Pet): PetList{
    const dat = {
      id: pet_item.id,
      name: pet_item.name,
      type: pet_item.type,
      owner_name: pet_item.owner.name
    };
    return dat;
  }

  items_pets: Pet[] = pets;

  ngOnInit(): void{
    this.listSettings = {
      name: 'Pets',
      columns: [
        {caption: 'id',
        dataField: 'id',
        visible: false,
        type: 'default'},
        {
          caption: 'Вид животного',
          dataField: 'type',
          visible: true,
          type: 'pet_type',
        },
        {
          caption: 'Кличка питомца',
          dataField: 'name',
          visible: true,
          type: 'default',
        },
        {
          caption: 'Хозяин',
          dataField: 'owner_name',
          visible: true,
          type: 'default',
        }
    ],
      data: this.items_pets.map(this.mapPetList)
    }
  }
}
