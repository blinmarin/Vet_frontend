import { Component, Input } from '@angular/core';
import { MarGridColumn } from '../mar-grid-list/models/mar-grid-column.model';

@Component({
  selector: 'app-mar-grid-template',
  templateUrl: './mar-grid-template.component.html',
  styleUrls: ['./mar-grid-template.component.scss']
})
export class MarGridTemplateComponent{
  @Input() data : any;
  @Input() column !: MarGridColumn;

  AccordionFlag2() {
    let elem = document.getElementById('wrap')
    if (elem != null){
      console.log(elem.offsetHeight)
      return elem.offsetHeight > 110;
    }
    else{
      console.log('aaaaa')
      return 0;
    }
  }

  AccordionFlag(elem: string) {
    return elem.length > 100;
  }
}
