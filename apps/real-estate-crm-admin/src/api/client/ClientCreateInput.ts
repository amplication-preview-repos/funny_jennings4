import { AppointmentCreateNestedManyWithoutClientsInput } from "./AppointmentCreateNestedManyWithoutClientsInput";

export type ClientCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutClientsInput;
  email?: string | null;
  fullName?: string | null;
  phone?: string | null;
  preferredContactMethod?: "Option1" | null;
};
