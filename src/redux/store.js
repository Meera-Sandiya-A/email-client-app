import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import emailReducer from "./slices/emailSlice";
import { emailApi } from "../services/emailApi";

export const store = configureStore({
  reducer: {
    email: emailReducer,
    [emailApi.reducerPath]: emailApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(emailApi.middleware),
});

setupListeners(store.dispatch);