import { AppointmentStatus } from "./appointment.model.enum";
import { Owner } from "./owner.model";
import { Pet } from "./pet.model";

export interface Appointment{
  id: number,
  pet: Pet,
  owner: Owner,
  status: AppointmentStatus,
  description: string
}
