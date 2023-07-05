import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Owner } from '../../models/owner.model';
import { owners } from 'src/data/owner.data';

@Component({
  selector: 'app-create-owner',
  templateUrl: './create-owner.component.html',
  styleUrls: ['./create-owner.component.scss']
})
export class CreateOwnerComponent {

  constructor(
    private _dialogRef: MatDialogRef<CreateOwnerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: {buttonType: string, itemData: Owner}
  ){}

  saveOwnerData(textInput_name: string, textInput_phone: string,){
let owner_id = owners[owners.length-1].id;

let OwnerItem: Owner = {
id: owner_id+1,
name: textInput_name,
phone: textInput_phone,
isDeleted: false
}

owners.push(OwnerItem);

this._dialogRef.close();

}

editOwnerData(item: Owner, textInput_name: string, textInput_phone: string,){

  let owner = owners.find(owner => owner.id === item.id)

  if (owner != undefined && owner!= null){
    owner.name = textInput_name;
    owner.phone = textInput_phone;
  }

  this._dialogRef.close();

  }



}
