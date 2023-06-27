import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MarAppointmentListComponent } from './modules/appointments/components/mar-appointment-list/mar-appointment-list.component';
import { MarOwnersListComponent } from './modules/appointments/components/mar-owners-list/mar-owners-list.component';
import { MarPetsListComponent } from './modules/appointments/components/mar-pets-list/mar-pets-list.component';

const routes: Routes = [
  { path: '', component: MarAppointmentListComponent },
  { path: 'owners', component: MarOwnersListComponent },
  { path: 'pets', component: MarPetsListComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
