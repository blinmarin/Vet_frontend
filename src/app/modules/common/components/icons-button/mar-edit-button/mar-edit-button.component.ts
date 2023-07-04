import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pet } from '../../../../pets/models/pet.model';
import { MarGridListSetting } from '../../mar-grid-list/models/mar-grid-list-setting.model';

@Component({
  selector: 'app-mar-edit-button',
  templateUrl: './mar-edit-button.component.html',
  styleUrls: ['./mar-edit-button.component.scss'],
})


export class MarEditButtonComponent{
  @Output() superEdit = new EventEmitter<string>();
  @Output() blabla = new EventEmitter<Pet>();
  @Output() edit = new EventEmitter();
  @Input() pet!: Pet;



}


