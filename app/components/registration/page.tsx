"use client";
import { FormProvider, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useStore } from "@/app/store";
import { formSchema } from "@/app/schema";
import { Signup } from "@/app/components/form";
import { useShallow } from "zustand/react/shallow";

const RegisterForm: React.FC = () => {
  const { email, password } = useStore(
    useShallow((state) => ({
      email: state.email,
      password: state.password,
    }))
  );

  const methods = useForm({
    mode: "onTouched",
    resolver: yupResolver(formSchema),
    defaultValues: {
      email: email,
      password: password,
    },
  });

  return (
    <>
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
            Sign in to your account
          </h2>
        </div>
        <FormProvider {...methods}>
          <Signup />
        </FormProvider>
      </div>
    </>
  );
};

export { RegisterForm };
export default RegisterForm;
