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

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  newsList: [],
  loading: false,
  error: false,
};

//? State'lerin API gibi async kaynaklardan gelen verilere gore guncellenmesi gerekebilir.
//? Ancak boyle bir durumda async islem tamamlandiktan sonra state guncellenmelidir.
//? Gonderilen API istegi ile dogrudan state guncellememelidir.
//? Islemin tamamlanmasi ile gelen veriye gore state'in guncellenemsini saglamak
//? adina bir arabirim (middleware) kullanilmaktadir.
//? Bu arabirim middleware denilir.Redux-Toolkit, default olarak Thunk kullanmaktadir.
//! Thunk'ın amaci reducers'a islenmis sonuclari gondermeden once
//! gecikmeli asenkron işlemlerin yurutulmesini saglamaktir.

export const getNews = createAsyncThunk(
  "getNews", //! action types

  async (thunkAPI, { rejectWithValue }) => {
    //! asyn callback function
    const API_KEY = "2ae73e0e340345b39a263c6557eb8796";
    const url = `https://newsapi.org/v2/top-headlines?country=tr&apiKey=${API_KEY}`;
    try {
      const { data } = await axios(url);
      return data.articles;
      //? yani API işlemi başarılı oldu ve data içinden article alındı,
      //? buradan gelen sonuç builder.fulfilled içindeki payload aracılığı ile
      //? initialState olarak boş tanımlanan newsList'e aktarılıyor.
    } catch (error) {
      console.log(error);
      //? rejectWithValue probu, async isteğin hatalı olduğu durumu sisteme bildirir.
      return rejectWithValue("Something went wrong");
    }
  }
);

const newsSlice = createSlice({
  name: "news",
  initialState,
  reducers: {
    clearNewsList: (state) => {
      state.newsList = [];
    },
  },
  //? extraReducers içinde side-effectlerin stateleri kontrol ediliyor.
  extraReducers: (builder) => {
    builder
      //? builder içinde bunlar otomatik ön tanımlı;
      //? pending yani API isteği başladı
      .addCase(getNews.pending, (state) => {
        state.loading = true;
      })
      //? fulfilled yani API isteği başarılı olarak sonuçlandı
      .addCase(getNews.fulfilled, (state, { payload }) => {
        state.newsList = payload;
        state.loading = false;
      })
      //? rejected yani API isteği BAŞARISIZ olarak sonuçlandı
      .addCase(getNews.rejected, (state, { payload }) => {
        state.loading = false;
        state.error = payload;
      });
  },
});

export const { clearNewsList } = newsSlice.actions;

export default newsSlice.reducer;
