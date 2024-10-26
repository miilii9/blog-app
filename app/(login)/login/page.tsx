import { Metadata } from "next";
import LoginForm from "./components/login-form";
export const metadata: Metadata = {
  title: "ورود",
  description: " صفحه ورود",
};
export default function Example() {
  return (
    <>
      <div className="flex min-h-svh flex-1 flex-col justify-center px-6 py-12 lg:px-8 m-auto">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            عضویت در خبر نامه
          </h2>
        </div>
        <LoginForm />
      </div>
    </>
  );
}
