import { Appointment } from "../appointment/Appointment";

export type Property = {
  address: string | null;
  appointments?: Array<Appointment>;
  createdAt: Date;
  id: string;
  name: string | null;
  price: number | null;
  status?: "Option1" | null;
  updatedAt: Date;
};
