import { Component } from '@angular/core';
import { Owner } from '../../models/owner.model';
import { owners } from 'src/data/owner.data';
import { MarGridListSetting } from 'src/app/modules/common/components/mar-grid-list/models/mar-grid-list-setting.model';

@Component({
  selector: 'app-mar-owners-list',
  templateUrl: './mar-owners-list.component.html',
  styleUrls: ['./mar-owners-list.component.scss']
})
export class MarOwnersListComponent {

  listSettings!: MarGridListSetting;

  items_owners: Owner[] = owners;

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


}
