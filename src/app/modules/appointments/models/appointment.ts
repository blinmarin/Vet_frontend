import { Owner } from "./owner";
import { Pets } from "./pet";

export const enum Status{
  registered = 'registered',
  rescheduled = 'rescheduled',
  completed = 'completed',
  canceled = 'canceled'
}

export interface Appointments{
  id: number,
  pet: Pets,
  owner: Owner,
  status: Status,
  description: string
}
