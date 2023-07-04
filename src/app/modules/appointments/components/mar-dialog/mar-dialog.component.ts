import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { AppointmentList } from '../../models/appointmentList.model';

@Component({
  selector: 'app-mar-dialog',
  templateUrl: './mar-dialog.component.html',
  styleUrls: ['./mar-dialog.component.scss']
})
export class MarDialogComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: {buttonType: string, itemData: AppointmentList}) { }
}
