import { Component } from '@angular/core';
import { MarGridListSetting } from 'src/app/modules/common/components/mar-grid-list/models/mar-grid-list-setting.model';
import { Pet } from '../../models/pet.model';
import { pets } from 'src/data/pet.data';
import { PetList } from '../../models/petList.model';
import { CreateEditData } from 'src/app/modules/appointments/components/mar-appointment-list/models/create-edit-data.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateAppointmentComponent } from 'src/app/modules/appointments/components/create-appointment/create-appointment.component';
import { CreatePetComponent } from '../create-pet/create-pet.component';
import { AnimalType } from '../../models/pet.model.enum';

@Component({
  selector: 'app-mar-pets-list',
  templateUrl: './mar-pets-list.component.html',
  styleUrls: ['./mar-pets-list.component.scss']
})

export class MarPetsListComponent {
  listSettings !: MarGridListSetting;

  constructor(public matDialog: MatDialog){}

  mapPetList(pet_item:Pet): PetList{
    const dat = {
      id: pet_item.id,
      name: pet_item.name,
      type: pet_item.type,
      owner_name: pet_item.owner.name,
      isDeleted: pet_item.isDeleted
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
        },
        {
          caption: 'isDeleted',
          dataField: 'isDeleted',
          visible: false,
          type: 'default',
        }
    ],
      data: this.items_pets.map(this.mapPetList)
    }
  }

  showEditDialog(event_data: CreateEditData) :void{


    this.matDialog.open(CreatePetComponent, {data: { buttonType :event_data.buttonType, itemData: event_data.itemData }}).afterClosed().subscribe((result)=>{
      this.listSettings.data = this.items_pets.map(this.mapPetList)})
  }

  showCreateDialog() :void{

    let empty_object: PetList = {
      id: -1,
      name: '',
      type: AnimalType.empty,
      owner_name: '',
      isDeleted: false
    }

    let data:CreateEditData={
      buttonType: 'create-button',
      itemData: empty_object
    }

    this.matDialog.open(CreatePetComponent, {data: { buttonType : data.buttonType, itemData: data.itemData }}).afterClosed().subscribe((result)=>{
      this.listSettings.data = this.items_pets.map(this.mapPetList)})
  }

  deleteItem(event_data: PetList){
    let pet = pets.find(pet => pet.id === event_data.id)
    if (pet != undefined && pet!=null){
      pet.isDeleted=true
    }

    this.listSettings.data = this.items_pets.map(this.mapPetList)

  }

}
