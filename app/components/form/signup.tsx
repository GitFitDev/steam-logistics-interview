"use client";
import { useEffect } from "react";
import { useFormContext } from "react-hook-form";
import { AlertNotification, ErrorModal } from "@/app/components";
import { Input } from "./input";
import { Button, Flex, Loader } from "@mantine/core";
import { useStore } from "@/app/store";
import { useShallow } from "zustand/react/shallow";

export const Signup: React.FC = () => {
  const {
    formState: { errors },
  } = useFormContext();

  const errorLength = Object.keys(errors).length;
  const errorMessages = Object.values(errors).map(
    (error) => error?.message?.toString() ?? ""
  );

  const {
    email,
    password,
    isLoading,
    setEmail,
    setPassword,
    setIsLoading,
    reset,
  } = useStore(
    useShallow((state) => ({
      email: state.email,
      password: state.password,
      isLoading: state.isLoading,
      reset: state.reset,
      setEmail: state.setEmail,
      setPassword: state.setPassword,
      setIsLoading: state.setLoading,
    }))
  );

  const alertTitle = (
    <ErrorModal
      title="List of Error Messages"
      message={errorMessages}
      numberOfErrors={errorLength}
    />
  );
  const onSubmit = () => {
    setEmail(email);
    setPassword(password);
    setIsLoading(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
      reset();
    }, 3000);
  });

  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      {errorLength > 0 && (
        <AlertNotification color="red" isError title={alertTitle} />
      )}
      {isLoading && errorLength === 0 && (
        <AlertNotification color="green" title="Success" />
      )}

      {errorLength === 0 && !isLoading && (
        <AlertNotification
          title="No Changes"
        />
      )}

      <div>
        <form action="#" method="POST" className="space-y-6">
          <Input
            label="Email address"
            id="email"
            defaultValue={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            required
          />
          <Input
            label="Password"
            type="text"
            id="password"
            onChange={(e) => setPassword(e.target.value)}
            defaultValue={password}
            required
          />

          <Flex direction="row" gap="md">
            <Button variant="default" onClick={reset} disabled={isLoading}>
              Reset
            </Button>
            {isLoading ? (
              <Button
                disabled
                variant="outline"
                rightSection={<Loader color="blue" />}
              >
                Submitting
              </Button>
            ) : (
              <Button
                type="submit"
                onClick={onSubmit}
                disabled={isLoading || errorLength > 0}
              >
                Sign In
              </Button>
            )}
          </Flex>
        </form>
      </div>
    </div>
  );
};

export default Signup;
