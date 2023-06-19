export const enum AnimalType{
  cat = 'cat',
  dog = 'dog',
  hamster = 'hamster',
  parrot = 'parrot'
}
export interface Pets{
  id: number,
  name: string,
  type: AnimalType
}
