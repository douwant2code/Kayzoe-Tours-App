import { z } from "zod";

export const BookingSchema = z.object({
  firstName: z.string().min(1, { message: "First name is required" }),
  lastName: z.string().min(1, { message: "Last name is required" }),
  email: z
    .string()

    .email("Valid email is required"),
  phone: z.string().min(10, { message: "10 digits is required" }),
  from: z.string().min(1, { message: "Departure location is required" }),
  to: z.string().min(1, { message: "Arrival location is required" }),
  checkIn: z.date(),
  checkOut: z.date(),
  noOfTravellers: z.number().min(1, { message: "1 digits is required" }),
  options: z.string().optional(),
  comment: z.string().optional(),
});
