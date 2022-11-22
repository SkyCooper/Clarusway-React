import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
  devTools: process.env.NODE_ENV !== "production",
//? production aşamasında değil ise (start ise) devTool kullan, değilse (build, test, eject ise)
});
export default store;
