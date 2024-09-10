import { SortOrder } from "../../util/SortOrder";

export type ClientOrderByInput = {
  createdAt?: SortOrder;
  email?: SortOrder;
  fullName?: SortOrder;
  id?: SortOrder;
  phone?: SortOrder;
  preferredContactMethod?: SortOrder;
  updatedAt?: SortOrder;
};
