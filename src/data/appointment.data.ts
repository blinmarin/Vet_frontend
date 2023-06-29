import { Appointment } from "../app/modules/appointments/models/appointment.model";
import { AppointmentStatus } from "../app/modules/appointments/models/appointment.model.enum";
import { pets } from "./pet.data";

export const appointments: Appointment[] = [
  {
    id: 0,
    pet: pets[0],
    owner: pets[0].owner,
    status: AppointmentStatus.registered,
    description: 'Я в своем познании настолько преисполнился, что я как будто бы уже сто триллионов миллиардов лет проживаю на триллионах и триллионах таких же планет, как эта Земля, мне этот мир абсолютно понятен, и я здесь ищу только одного - покоя, умиротворения и вот этой гармонии, от слияния с бесконечно вечным, от созерцания великого фрактального подобия и от вот этого замечательного всеединства существа, бесконечно вечного, куда ни посмотри, хоть вглубь - бесконечно малое, хоть ввысь - бесконечное большое, понимаешь?'
  },
  {
    id: 1,
    pet: pets[1],
    owner: pets[1].owner,
    status: AppointmentStatus.completed,
    description: 'Наталья, морская пехота! Стартуем!'
  },
  {
    id: 2,
    pet: pets[2],
    owner: pets[2].owner,
    status: AppointmentStatus.canceled,
    description: 'Зубенко Михаил Петрович, вор в законе, мафиозник'
  },
  {
    id: 3,
    pet: pets[3],
    owner: pets[3].owner,
    status: AppointmentStatus.rescheduled,
    description: 'Имя Ибрагим вам что-нибудь говорит? Прекрасное имя. Аллах акбар.'
  }

]
