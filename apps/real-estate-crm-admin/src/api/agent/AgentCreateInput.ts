import { AppointmentCreateNestedManyWithoutAgentsInput } from "./AppointmentCreateNestedManyWithoutAgentsInput";

export type AgentCreateInput = {
  appointments?: AppointmentCreateNestedManyWithoutAgentsInput;
  email?: string | null;
  fullName?: string | null;
  phone?: string | null;
};
