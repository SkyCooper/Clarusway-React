import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import newsReducer from "../features/newsSlice";

//? toolkit kullanımında combine yapmaya gerek yok,
//? configure kullanınca hem oluşturuyor, hem de birleştiriyor.
const store = configureStore({
  reducer: {
    auth: authReducer,
    news: newsReducer,
  },
});
export default store;
