import { Component, OnInit } from '@angular/core';
import { Pet } from '../../../pets/models/pet.model';
import { pets } from 'src/data/pet.data';
import { Owner } from '../../../owners/models/owner.model';
import { owners } from 'src/data/owner.data';
import { Appointment } from '../../models/appointment.model';
import { appointments } from 'src/data/appointment.data';
import { MarGridListSetting } from 'src/app/modules/common/components/mar-grid-list/models/mar-grid-list-setting.model';
import { AppointmentList } from '../../models/appointmentList.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateAppointmentComponent } from '../create-appointment/create-appointment.component';
import { CreateEditData } from './models/create-edit-data.model';
import { AppointmentStatus } from '../../models/appointment.model.enum';
import { AnimalType } from 'src/app/modules/pets/models/pet.model.enum';



@Component({
  selector: 'app-mar-appointment-list',
  templateUrl: './mar-appointment-list.component.html',
  styleUrls: ['./mar-appointment-list.component.scss']
})
export class MarAppointmentListComponent implements OnInit {
  listSettings!: MarGridListSetting;



  constructor(public matDialog: MatDialog){}


  items_pets: Pet[] = pets;
  items_owners: Owner[] = owners;
  items_appointments: Appointment[] = appointments;

  mapAppointmentList(appointment_item: Appointment): AppointmentList {
    const dat = {
      id: appointment_item.id,
      status: appointment_item.status,
      pet_type: appointment_item.pet.type,
      pet_name: appointment_item.pet.name,
      owner_name: appointment_item.owner.name,
      owner_number: appointment_item.owner.phone,
      description: appointment_item.description,
      isDeleted: appointment_item.isDeleted
    };
    return dat;
  }

  ngOnInit(): void {
    this.listSettings = {
      name: 'Appointments',
      columns: [
        {
          caption: 'id',
          dataField: 'id',
          visible: false,
          type: 'default',
        },
        {
          caption: 'Статус',
          dataField: 'status',
          visible: true,
          type: 'status',
        },
        {
          caption: 'Вид животного',
          dataField: 'pet_type',
          visible: true,
          type: 'pet_type',
        },
        {
          caption: 'Питомец',
          dataField: 'pet_name',
          visible: true,
          type: 'default',
        },
        {
          caption: 'Имя владельца',
          dataField: 'owner_name',
          visible: true,
          type: 'default',
        },
        {
          caption: 'Телефон владельца',
          dataField: 'owner_number',
          visible: true,
          type: 'default',
        },
        {
          caption: 'Описание',
          dataField: 'description',
          visible: true,
          type: 'description',
        },
        {
          caption: 'isDeleted',
          dataField: 'isDeleted',
          visible: false,
          type: 'default',
        }
      ],
      data: this.items_appointments.map(this.mapAppointmentList)
    };
  }



  showCreateDialog() :void{

    let empty_object: AppointmentList = {
      id: -1,
      status: AppointmentStatus.empty,
      pet_type: AnimalType.empty,
      pet_name: '',
      owner_name: '',
      owner_number: '',
      description: '',
      isDeleted: false
    }

    let data:CreateEditData={
      buttonType: 'create-button',
      itemData: empty_object
    }

    this.matDialog.open(CreateAppointmentComponent, {data: { buttonType :data.buttonType, itemData: data.itemData }}).afterClosed().subscribe((result)=>{
      this.listSettings.data = this.items_appointments.map(this.mapAppointmentList)})
  }

  showEditDialog(event_data: CreateEditData) :void{


    this.matDialog.open(CreateAppointmentComponent, {data: { buttonType :event_data.buttonType, itemData: event_data.itemData }}).afterClosed().subscribe((result)=>{
      this.listSettings.data = this.items_appointments.map(this.mapAppointmentList)})
  }


  deleteItem(event_data: AppointmentList){
    let appointment = appointments.find(appointment => appointment.id === event_data.id)
    if (appointment != undefined && appointment!=null){
      appointment.isDeleted=true
    }

    this.listSettings.data = this.items_appointments.map(this.mapAppointmentList)

  }



  sayAAA(event: string, a: string) {
    alert(event + ' ' + a);
  }

  sayBBB(event: Pet) {
    alert(event.name);
  }






}
