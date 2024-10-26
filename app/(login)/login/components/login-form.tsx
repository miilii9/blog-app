"use client";
import React from "react";
import { loginFormSchema, LoginFormType } from "../schema";
import { FormProvider, useForm } from "react-hook-form";
import { setCookie } from "cookies-next";
import { useRouter } from "next/navigation";
import { zodResolver } from "@hookform/resolvers/zod";
import ControlledInput from "@/components/ui/input/input";

const LoginForm = () => {
  const formSchema = loginFormSchema();

  const methods = useForm<LoginFormType>({
    resolver: zodResolver(formSchema),
    defaultValues: {},
  });

  const router = useRouter();

  const saveUserData = (token: string) => {
    setCookie("token", token);
  };

  const onSubmit = () => {
    const token =
      "fvXuTVmLXIvHRxRw7McVbm1ERlGP13BY1EoopvWPViRBvFivV87cHs93yp0VpAZf";
    saveUserData(token);
    router.push("/blogs");
  };

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <FormProvider {...methods}>
        <form className="space-y-6" onSubmit={methods.handleSubmit(onSubmit)}>
          <ControlledInput name="email" inputType="text" placeholder="ایمیل" />
          <ControlledInput
            name="password"
            inputType="password"
            placeholder="پسورد"
          />

          <div>
            <button
              type="submit"
              className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              ورود
            </button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
