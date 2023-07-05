import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { PetList } from '../../models/petList.model';
import { selectModel } from 'src/app/modules/common/components/mar-select/models/grid-select.model';
import { AnimalType } from '../../models/pet.model.enum';
import { pets } from 'src/data/pet.data';
import { owners } from 'src/data/owner.data';
import { appointments } from 'src/data/appointment.data';
import { Owner } from 'src/app/modules/owners/models/owner.model';
import { Pet } from '../../models/pet.model';
import { AppointmentList } from 'src/app/modules/appointments/models/appointmentList.model';

@Component({
  selector: 'app-create-pet',
  templateUrl: './create-pet.component.html',
  styleUrls: ['./create-pet.component.scss']
})
export class CreatePetComponent {

  constructor(
    private _dialogRef: MatDialogRef<CreatePetComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {buttonType: string, itemData: PetList}
  ){}

  textInput_type!: AnimalType;

  getSelectOptionAnimal(event: any){
    this.textInput_type = event;
  }


  savePetData(textInput_pet: string,
                      textInput_owner: string,
){

let pet_id = pets[pets.length-1].id;
let owner_id = owners[owners.length-1].id;


let OwnerItem: Owner = {
id: owner_id+1,
name: textInput_owner,
phone: '',
isDeleted: false
}
owners.push(OwnerItem);

let PetItem: Pet = {
id: pet_id+1,
name: textInput_pet,
type: this.textInput_type,
owner: owners[OwnerItem.id],
isDeleted: false
}

pets.push(PetItem);


this._dialogRef.close();

}

typesAnimals: selectModel[] = [
{value: AnimalType.cat, view: 'котик'},
{value: AnimalType.dog, view: 'пёсик'},
{value: AnimalType.hamster, view: 'хомячок'},
{value: AnimalType.parrot, view: 'попугайчик'},
];

editPetData(item: PetList, textInput_pet: string, textInput_owner: string,){

let pet = pets.find(pet => pet.id === item.id)

if (pet != undefined && pet!= null){
  pet.name = textInput_pet;
  pet.owner.name = textInput_owner;
  pet.type = this.textInput_type?this.textInput_type:item.type;
}

this._dialogRef.close();

}


}
