import { z } from "zod";

export const addressSchema = z.object({
  phone: z
    .string()
    .min(5, { message: "Phone number must be at least 5 digits" })
    .nonempty({ message: "Phone number is required" }),
  email: z
    .string()
    .email({ message: "Invalid email address" })
    .nonempty({ message: "Email is required" }),

  address_line1: z.string().nonempty({ message: "Address line 1 is required" }),
  landmark: z.string(),
  country: z.string(),
  state: z.string().nonempty({ message: "State is required" }),
  city: z.string().nonempty({ message: "City is required" }),
});

export type Address = z.infer<typeof addressSchema>;