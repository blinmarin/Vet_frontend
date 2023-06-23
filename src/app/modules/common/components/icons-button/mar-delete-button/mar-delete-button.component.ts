import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-mar-delete-button',
  templateUrl: './mar-delete-button.component.html',
  styleUrls: ['./mar-delete-button.component.scss'],
})

export class MarDeleteButtonComponent {
  @Output() superClick = new EventEmitter<string>();

  sayHello(){
    let a = 'Hello word';
    this.superClick.emit(a);
  }
}







