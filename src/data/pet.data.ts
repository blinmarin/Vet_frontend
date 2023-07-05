import { Pet } from "../app/modules/pets/models/pet.model";
import { AnimalType } from "../app/modules/pets/models/pet.model.enum";
import { owners } from "./owner.data";

export const pets: Pet[] = [
  {
    id: 0,
    name: 'Bagira',
    type: AnimalType.cat,
    owner: owners[0],
    isDeleted: false
  },
  {
    id: 1,
    name: 'Stepa',
    type: AnimalType.hamster,
    owner: owners[1],
    isDeleted: false
  },
  {
    id: 2,
    name: 'Nora',
    type: AnimalType.dog,
    owner: owners[0],
    isDeleted: false
  },
  {
    id: 3,
    name: 'Kesha',
    type: AnimalType.parrot,
    owner: owners[2],
    isDeleted: false
  }

]
