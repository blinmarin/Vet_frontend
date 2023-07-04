import { AfterViewInit, Component, ElementRef, Inject, Input, ViewChild } from '@angular/core';
import { ModalViewService } from '../../services/modal-view.service';
import { windowModel } from './models/mar-window.model';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { selectModel } from '../mar-select/models/grid-select.model';
import { AnimalType } from 'src/app/modules/pets/models/pet.model.enum';
import { AppointmentStatus } from 'src/app/modules/appointments/models/appointment.model.enum';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrls: ['./modal-window.component.scss']
})

export class ModalWindowComponent {



  constructor(
    public dialogRef: MatDialogRef<ModalWindowComponent>,
    @Inject(MAT_DIALOG_DATA) public data: windowModel,
  ) {}


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



  saveAppointmentData(){
    let a=document.getElementById("blabla-1")?.innerHTML
    console.log(typeof(a))
    console.log(a)

  }

  aaaa(){
    console.log('aaaaaaaa')
  }



}
