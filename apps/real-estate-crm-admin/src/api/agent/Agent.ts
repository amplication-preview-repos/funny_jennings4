import { Appointment } from "../appointment/Appointment";

export type Agent = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  phone: string | null;
  updatedAt: Date;
};
