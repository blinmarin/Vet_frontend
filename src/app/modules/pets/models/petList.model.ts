import { AnimalType } from "./pet.model.enum";

export interface PetList{
  id: number,
  name: string,
  type: AnimalType,
  owner_name: string,
  isDeleted: boolean

}
