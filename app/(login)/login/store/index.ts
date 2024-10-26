import { create } from "zustand";
import { persist } from "zustand/middleware";

interface IActions {
  clearUser: () => void;
  setUser: (token: string) => void;
}

export interface IMainStore {
  token: string;
}

const mainStore = create(
  persist<IMainStore & IActions>(
    (set) => ({
      token: "",

      setUser: (token) => set((state) => ({ ...state, token })),
      clearUser: () => set((state) => ({ ...state, token: "" })),
    }),
    {
      name: "init",
    }
  )
);
export default mainStore;
