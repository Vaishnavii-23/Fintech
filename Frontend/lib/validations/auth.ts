import { z } from "zod";

export const signUpSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email"),
  password: z.string().min(6, "Password must be 6+ chars"),
  terms: z.literal(true, {
    errorMap: () => ({ message: "You must accept terms" }),
  }),
});
