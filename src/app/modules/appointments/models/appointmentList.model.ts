import { AnimalType } from "../../pets/models/pet.model.enum";
import { AppointmentStatus } from "./appointment.model.enum";

export interface AppointmentList{
  id: number,
  status: AppointmentStatus,
  pet_type: AnimalType,
  pet_name: string,
  owner_name: string,
  owner_number: string,
  description: string,
  isDeleted: boolean
}
