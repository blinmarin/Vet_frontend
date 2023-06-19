import { Pet } from "../modules/appointments/models/pet.model";
import { AnimalType } from "../modules/appointments/models/pet.model.enum";
import { owners } from "./owner.data";

export const pets: Pet[] = [
  {
    id: 0,
    name: 'Bagira',
    type: AnimalType.cat,
    owner: owners[0]
  },
  {
    id: 1,
    name: 'Stepa',
    type: AnimalType.hamster,
    owner: owners[1]
  },
  {
    id: 2,
    name: 'Nora',
    type: AnimalType.dog,
    owner: owners[0]
  },
  {
    id: 3,
    name: 'Kesha',
    type: AnimalType.parrot,
    owner: owners[2]
  }

]
