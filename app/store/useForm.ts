import { create, StateCreator } from "zustand";
import { devtools } from "zustand/middleware";
import { FormData } from "../schema";

type UserFormState = {
  email: string;
  password: string;
  isLoading: boolean;
  isError: boolean;
};

type UserFormStoreActions = {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: boolean) => void;
  reset: () => void;
};

export type UserForm = UserFormState & UserFormStoreActions;

const createUserSlice: StateCreator<
  UserForm,
  [["zustand/immer", never]],
  [],
  UserForm
> = (set) => ({
  email: "",
  password: "",
  isLoading: false,
  isError: false,
  setEmail: (email) =>
    set((state) => {
      state.email = email;
    }),
  setPassword: (password) =>
    set((state) => {
      state.password = password;
    }),
  setLoading: (isLoading) =>
    set((state) => {
      state.isLoading = isLoading;
    }),
  setError: (isError) =>
    set((state) => {
      state.isError = isError;
    }),
  reset: () => set({ email: "", password: "", isLoading: false, isError: false }),
});

export { createUserSlice };
export type { UserFormState, UserFormStoreActions };
export default createUserSlice;
