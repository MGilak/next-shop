import { create } from "zustand";
import { devtools, persist } from "zustand/middleware";

const darkModeStore = (set) => ({
  mode: false,
  changeMode: () => {
    set((state) => ({ mode: !state.mode }));
  },
});

const useDarkMode = create(
  devtools(
    persist(darkModeStore, {
      name: "darkMode",
    })
  )
);

export default useDarkMode;
