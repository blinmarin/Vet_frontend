import { Component, EventEmitter, Input, Output} from '@angular/core';
import { Pet } from '../../../../appointments/models/pet.model';

@Component({
  selector: 'app-mar-edit-button',
  templateUrl: './mar-edit-button.component.html',
  styleUrls: ['./mar-edit-button.component.scss'],
})


export class MarEditButtonComponent{
  @Output() superEdit = new EventEmitter<string>();
  @Output() blabla = new EventEmitter<Pet>();
  @Input() pet!: Pet;

  superAbobus(){
    this.pet.name = 'Abobus' + this.pet.name;
    this.blabla.emit(this.pet);
  }

}


