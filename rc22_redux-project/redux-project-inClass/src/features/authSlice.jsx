//? rxslice snipeti
// import { createSlice } from '@reduxjs/toolkit'

// const initialState = {

// }

// const authSlice = createSlice({
//   name: second,
//   initialState,
//   reducers: {}
// });

// export const {} = authSlice.actions

// export default authSlice.reducer

//? yukarısı default snipet yazılımı

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setUser: (state, { payload }) => {
      state.user = payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const { setUser, clearUser } = authSlice.actions;
export default authSlice.reducer;

//? redux-toolkit ile hepsi tek bir slice dosyasında birleştiriliyor.

//? Klasik Redux ile yapılması
//! Types yazılıyor
// export const SET_USER = "SET_USER"

//! action creators yazılıyor
// export const setUser = (payload)=>{
//   return {type:SET_USER, payload}
// }

//! reducer ayrı yerde oluyor
