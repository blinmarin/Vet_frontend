import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MarGridSelectComponent } from 'src/app/modules/common/components/mar-grid-select/mar-grid-select.component';
import { typeVariantsMass } from 'src/app/modules/common/models/grid-select.model';
import { Owner } from 'src/app/modules/owners/models/owner.model';
import { Pet } from 'src/app/modules/pets/models/pet.model';
import { owners } from 'src/data/owner.data';
import { pets } from 'src/data/pet.data';
import { Appointment } from '../../models/appointment.model';
import { appointments } from 'src/data/appointment.data';
import { AnimalType } from 'src/app/modules/pets/models/pet.model.enum';
import { AppointmentStatus } from '../../models/appointment.model.enum';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent {
  textInput_type!: AnimalType;

  constructor(public matDialog: MatDialog){}


  getSelectOption(event: any){
    this.textInput_type = event;
  }


  saveAppointmentData(textInput_pet: HTMLInputElement,
                      textInput_name: HTMLInputElement,
                      textInput_phone: HTMLInputElement,
                      textInput_description: HTMLTextAreaElement){

    let pet_id = pets[pets.length-1].id;
    let owner_id = owners[owners.length-1].id;
    let appointment_id = appointments[appointments.length-1].id;

    let OwnerItem: Owner = {
      id: owner_id+1,
      name: textInput_name.value,
      phone: textInput_phone.value
    }
    owners.push(OwnerItem);

    let PetItem: Pet = {
      id: pet_id+1,
      name: textInput_pet.value,
      type: this.textInput_type,
      owner: owners[OwnerItem.id]
    }

    pets.push(PetItem);

    let AppointmentItem: Appointment = {
      id: appointment_id+1,
      pet: pets[PetItem.id],
      owner: pets[PetItem.id].owner,
      status: AppointmentStatus.registered,
      description: textInput_description.value
    }

    appointments.push(AppointmentItem);

    console.log(appointments);

    this.matDialog.closeAll();

  }



  types: typeVariantsMass[] = [
    {value: AnimalType.cat, view: 'котик'},
    {value: AnimalType.dog, view: 'пёсик'},
    {value: AnimalType.hamster, view: 'хомячок'},
    {value: AnimalType.parrot, view: 'попугайчик'},
  ];
}
