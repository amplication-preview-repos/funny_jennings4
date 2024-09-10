import { AppointmentListRelationFilter } from "../appointment/AppointmentListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AgentWhereInput = {
  appointments?: AppointmentListRelationFilter;
  email?: StringNullableFilter;
  fullName?: StringNullableFilter;
  id?: StringFilter;
  phone?: StringNullableFilter;
};
