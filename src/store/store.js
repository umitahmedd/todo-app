import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./features/counter/counterSlice";
import projextSlice from "./features/counter/projectSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      counter: counterSlice,
      project: projextSlice,
    },
  });
};
