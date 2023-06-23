import { Component, Input} from '@angular/core';
import {CdkAccordionModule} from '@angular/cdk/accordion';
import {MatIconModule} from '@angular/material/icon';

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss'],
  standalone: true,
  imports: [CdkAccordionModule,
            MatIconModule],

})

export class AccordionComponent{
  @Input() text!: string[];


  AAA(x:any){
    console.log(typeof(x))
  }
}
