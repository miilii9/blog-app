import { z } from "zod";

export const loginFormSchema = () =>
  z.object({
    email: z.string().email({ message: "ادرس ایمیل را به درستی انتخاب کنید" }),
    password: z
      .string()
      .min(5, { message: "رمز عبور باید بیش از 5 کارکتر باشد" }),
  });

export type LoginFormType = z.infer<ReturnType<typeof loginFormSchema>>;
