import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Owner } from 'src/app/modules/owners/models/owner.model';
import { Pet } from 'src/app/modules/pets/models/pet.model';
import { owners } from 'src/data/owner.data';
import { pets } from 'src/data/pet.data';
import { Appointment } from '../../models/appointment.model';
import { appointments } from 'src/data/appointment.data';
import { AnimalType } from 'src/app/modules/pets/models/pet.model.enum';
import { AppointmentStatus } from '../../models/appointment.model.enum';
import { MatDialog } from '@angular/material/dialog';
import { selectModel } from 'src/app/modules/common/components/mar-select/models/grid-select.model';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})
export class CreateAppointmentComponent {
  textInput_type!: AnimalType;
  textInput_status!: AppointmentStatus;

  constructor(public matDialog: MatDialog){}


  getSelectOptionAnimal(event: any){
    this.textInput_type = event;
  }

  getSelectOptionStatus(event: any){
    this.textInput_status = event;
  }


  saveAppointmentData(textInput_pet: string,
                      textInput_name: string,
                      textInput_phone: string,
                      textInput_description: string){

    let pet_id = pets[pets.length-1].id;
    let owner_id = owners[owners.length-1].id;
    let appointment_id = appointments[appointments.length-1].id;

    let OwnerItem: Owner = {
      id: owner_id+1,
      name: textInput_name,
      phone: textInput_phone
    }
    owners.push(OwnerItem);

    let PetItem: Pet = {
      id: pet_id+1,
      name: textInput_pet,
      type: this.textInput_type,
      owner: owners[OwnerItem.id]
    }

    pets.push(PetItem);

    let AppointmentItem: Appointment = {
      id: appointment_id+1,
      pet: pets[PetItem.id],
      owner: pets[PetItem.id].owner,
      status: AppointmentStatus.registered,
      description: textInput_description
    }

    appointments.push(AppointmentItem);

    console.log(appointments);

    this.matDialog.closeAll();

  }



  typesAnimals: selectModel[] = [
    {value: AnimalType.cat, view: 'котик'},
    {value: AnimalType.dog, view: 'пёсик'},
    {value: AnimalType.hamster, view: 'хомячок'},
    {value: AnimalType.parrot, view: 'попугайчик'},
  ];

  typesStatus: selectModel[] = [
    {value: AppointmentStatus.registered, view: 'Клиент записан'},
    {value: AppointmentStatus.completed, view: 'Приём проведен'},
    {value: AppointmentStatus.rescheduled, view: 'Запись перенесена'},
    {value: AppointmentStatus.canceled, view: 'Запись проведена'},
  ];
}
