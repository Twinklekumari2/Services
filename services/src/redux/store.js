import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "./../features/themeSlie.jsx";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
});
