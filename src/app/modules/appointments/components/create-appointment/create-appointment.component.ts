import { Component, Inject, EventEmitter, Input, Output } from '@angular/core';
import { Owner } from 'src/app/modules/owners/models/owner.model';
import { Pet } from 'src/app/modules/pets/models/pet.model';
import { owners } from 'src/data/owner.data';
import { pets } from 'src/data/pet.data';
import { Appointment } from '../../models/appointment.model';
import { appointments } from 'src/data/appointment.data';
import { AnimalType } from 'src/app/modules/pets/models/pet.model.enum';
import { AppointmentStatus } from '../../models/appointment.model.enum';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { selectModel } from 'src/app/modules/common/components/mar-select/models/grid-select.model';
import { AppointmentList } from '../../models/appointmentList.model';
import { _isTestEnvironment } from '@angular/cdk/platform';

@Component({
  selector: 'app-create-appointment',
  templateUrl: './create-appointment.component.html',
  styleUrls: ['./create-appointment.component.scss']
})

export class CreateAppointmentComponent {


  textInput_type!: AnimalType;
  textInput_status!: AppointmentStatus;


  constructor(
    private _dialogRef: MatDialogRef<CreateAppointmentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {buttonType: string, itemData: AppointmentList}
  ){}

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
      phone: textInput_phone,
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

    let AppointmentItem: Appointment = {
      id: appointment_id+1,
      pet: pets[PetItem.id],
      owner: pets[PetItem.id].owner,
      status: AppointmentStatus.registered,
      description: textInput_description,
      isDeleted: false
    }

    appointments.push(AppointmentItem);

    console.log(appointments);


    this._dialogRef.close();

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
    {value: AppointmentStatus.canceled, view: 'Запись отменена'},
  ];


  editAppointmentData(item: AppointmentList,
                      textInput_pet: string,
                      textInput_name: string,
                      textInput_phone: string,
                      textInput_description: string,
                    ){

  let appointment = appointments.find(appointment => appointment.id === item.id)

  if (appointment != undefined && appointment!= null){
    appointment.status = this.textInput_status?this.textInput_status:item.status;
    appointment.pet.type = this.textInput_type?this.textInput_type:item.pet_type;
    appointment.pet.name = textInput_pet;
    appointment.owner.name = textInput_name;
    appointment.owner.phone = textInput_phone;
    appointment.description = textInput_description
  }

  this._dialogRef.close();

  }
}
