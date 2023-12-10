import { create } from "zustand";

const useStore = create((set) => ({
  carts: [],
  addCart: (item) => {
    set((state) => ({ carts: [...state.carts, { ...item, qnt: 1 }] }));
  },
}));

export default useStore;
