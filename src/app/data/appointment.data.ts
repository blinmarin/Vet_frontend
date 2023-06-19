import { Appointment } from "../modules/appointments/models/appointment.model";
import { AppointmentStatus } from "../modules/appointments/models/appointment.model.enum";
import { pets } from "./pet.data";

export const appointments: Appointment[] = [
  {
    id: 1,
    pet: pets[0],
    owner: pets[0].owner,
    status: AppointmentStatus.registered,
    description: 'Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов...'
  },
  {
    id: 2,
    pet: pets[1],
    owner: pets[1].owner,
    status: AppointmentStatus.registered,
    description: 'Наталья, морская пехота! Стартуем!'
  },
  {
    id: 3,
    pet: pets[2],
    owner: pets[2].owner,
    status: AppointmentStatus.registered,
    description: 'Зубенко Михаил Петрович, вор в законе, мафиозник'
  }

]
