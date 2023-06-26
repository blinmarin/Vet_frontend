import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { Routes, RouterModule } from '@angular/router';
import { MarAppointmentListComponent } from './modules/appointments/components/mar-appointment-list/mar-appointment-list.component';
import { MarOwnersListComponent } from './modules/appointments/components/mar-owners-list/mar-owners-list.component';
import { MarPetsListComponent } from './modules/appointments/components/mar-pets-list/mar-pets-list.component';

const appRoutes: Routes = [
  { path: '', component: MarAppointmentListComponent },
  { path: 'owners', component: MarOwnersListComponent },
  { path: 'pets', component: MarPetsListComponent },
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    AppRoutingModule,
    BrowserAnimationsModule,
    AppointmentsModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
