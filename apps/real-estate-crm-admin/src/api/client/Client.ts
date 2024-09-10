import { Appointment } from "../appointment/Appointment";

export type Client = {
  appointments?: Array<Appointment>;
  createdAt: Date;
  email: string | null;
  fullName: string | null;
  id: string;
  phone: string | null;
  preferredContactMethod?: "Option1" | null;
  updatedAt: Date;
};
