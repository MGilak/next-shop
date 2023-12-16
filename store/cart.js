import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const cartsStore = (set, get) => ({
  carts: [],
  addCart: (item) => {
    const product = get().carts.find((cart) => cart.id === item.id);

    if (product) {
      set((state) => ({
        carts: state.carts.map((cart) =>
          cart.id === item.id ? { ...cart, qnt: cart.qnt + 1 } : cart
        ),
      }));
    } else {
      set((state) => ({ carts: [...state.carts, { ...item, qnt: 1 }] }));
    }
  },
  increase: (item) => {
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === item.id ? { ...cart, qnt: cart.qnt + 1 } : cart
      ),
    }));
  },
  decrease: (item) => {
    set((state) => ({
      carts: state.carts.map((cart) =>
        cart.id === item.id ? { ...cart, qnt: cart.qnt - 1 } : cart
      ),
    }));
  },
  removeItem: (item) => {
    set((state) => ({
      carts: state.carts.filter((cart) => cart.id !== item.id),
    }));
  },
});

const useStore = create(
  devtools(
    persist(cartsStore, {
      name: "carts",
    })
  )
);

export default useStore;
