import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice";
import stockReducer from "../features/stockSlice";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage/"; // defaults to localStorage for web
//* import storage from 'redux-persist/lib/storage/session'
//* default olarak local gelir, onu session olarak değiştirebiliriz.
//? redux-persist sayfa refresh olduğunda state'lerin kaybolmamasını ve logout olmamayı sağlıyor.

//todo, serializer hatası varsa consolda bunu gidermek için bunları al kullan olarak import ediyoruz.
import {
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";

const persistConfig = {
  key: "root",
  storage,
};
const persistedReducer = persistReducer(persistConfig, authReducer);

const store = configureStore({
  reducer: {
    auth: persistedReducer,
    stock : stockReducer,
  },
  //todo, serializer hatası için middleware ekleniyor.
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
  devTools: process.env.NODE_ENV !== "production",
});

export const persistor = persistStore(store);
export default store;
