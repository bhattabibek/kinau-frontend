import type { baseInitialStateI } from "./baseInitialState.interface";

export interface authI extends baseInitialStateI {
  _id: string;
  firstName: string;
  lastName: string;
  emailVerified: boolean;
  isActive: boolean;
  createdAt: Date;

  phone: string;
  email: string;
  role: string;
}
