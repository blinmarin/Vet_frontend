import { Component } from '@angular/core';
import { Owner } from '../../models/owner.model';
import { owners } from 'src/data/owner.data';
import { MarGridListSetting } from 'src/app/modules/common/components/mar-grid-list/models/mar-grid-list-setting.model';
import { CreateEditData } from 'src/app/modules/appointments/components/mar-appointment-list/models/create-edit-data.model';
import { MatDialog } from '@angular/material/dialog';
import { CreateOwnerComponent } from '../create-owner/create-owner.component';

@Component({
  selector: 'app-mar-owners-list',
  templateUrl: './mar-owners-list.component.html',
  styleUrls: ['./mar-owners-list.component.scss']
})
export class MarOwnersListComponent {

  listSettings!: MarGridListSetting;

  items_owners: Owner[] = owners;

  constructor(public matDialog: MatDialog){}

  ngOnInit(): void {
    this.listSettings = {
      name: 'Owners',
      columns: [
        {
          caption: 'id',
          dataField: 'id',
          visible: false,
          type: 'default',
        },
        {
          caption: 'Имя владельца',
          dataField: 'name',
          visible: true,
          type: 'default',
        },
        {
          caption: 'Номер владельца',
          dataField: 'phone',
          visible: true,
          type: 'default',
        },

      ],
      data: this.items_owners
    };
  }

  showCreateDialog() :void{

    let empty_object: Owner = {
      id: -1,
      name: '',
      phone: '',
      isDeleted: false
    }

    let data:CreateEditData={
      buttonType: 'create-button',
      itemData: empty_object
    }

    this.matDialog.open(CreateOwnerComponent, {data: { buttonType :data.buttonType, itemData: data.itemData }}).afterClosed().subscribe((result)=>{
      this.listSettings.data = this.items_owners})
  }

  showEditDialog(event_data: CreateEditData) :void{


    this.matDialog.open(CreateOwnerComponent, {data: { buttonType :event_data.buttonType, itemData: event_data.itemData }}).afterClosed().subscribe((result)=>{
      this.listSettings.data = this.items_owners})
  }

  deleteItem(event_data: Owner){
    let owner = owners.find(owner => owner.id === event_data.id)
    if (owner != undefined && owner!=null){
      owner.isDeleted=true
    }

    this.listSettings.data = this.items_owners

  }




}
