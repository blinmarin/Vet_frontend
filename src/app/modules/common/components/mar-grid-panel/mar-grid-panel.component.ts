import { Component, EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-mar-grid-panel',
  templateUrl: './mar-grid-panel.component.html',
  styleUrls: ['./mar-grid-panel.component.scss']
})
export class MarGridPanelComponent {
  @Output() showDialogClick = new EventEmitter();

  showDialog(){
    this.showDialogClick.emit()
  }
}
