import { Owner } from "./owner.model";
import { AnimalType } from "./pet.model.enum";

export interface Pet{
  id: number,
  name: string,
  type: AnimalType,
  owner: Owner
}
