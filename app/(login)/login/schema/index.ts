import { z } from "zod";

export const loginFormSchema = () =>
  z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password: z.string().min(2),
  });

export type LoginFormType = z.infer<ReturnType<typeof loginFormSchema>>;
