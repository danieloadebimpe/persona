import { configureStore } from "@reduxjs/toolkit";
import connectionCore from "./connection.core";

export const store = configureStore({
  reducer: {
    connection: connectionCore,
  },
});
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppStore = typeof store.getState;
export default store;
