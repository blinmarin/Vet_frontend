import { AppointmentStatus } from "./appointment.model.enum";
import { Owner } from "../../owners/models/owner.model";
import { Pet } from "../../pets/models/pet.model";

export interface Appointment{
  id: number,
  pet: Pet,
  owner: Owner,
  status: AppointmentStatus,
  description: string,
  isDeleted: boolean
}
