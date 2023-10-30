import * as z from "zod";

export const SignupValidation = z.object({
  name: z.string().min(3, { message: "Too Short" }),
  username: z.string().min(3, { message: "Too Short" }),
  email: z.string().email({ message: "Invalid Email" }),
  password: z
    .string()
    .min(8, { message: "Password must be at least 8 characters long" }),
});
