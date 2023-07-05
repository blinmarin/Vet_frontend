import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentsModule } from './modules/appointments/appointments.module';
import { OwnersModule } from './modules/owners/owners.module';
import { PetsModule } from './modules/pets/pets.module';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    AppointmentsModule,
    OwnersModule,
    PetsModule,
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
