import axios from "axios";
import {
  fetchFail,
  fetchStart,
  loginSuccess,
  logoutSuccess,
} from "../features/authSlice";
import { useDispatch } from "react-redux";

const BASE_URL = "https://clarusway.pythonanywhere.com/";
//? her defasında yazmamak için url bir değişkene atanıyor.

//todo, hookların özelliği;
//todo, (useState, useEffect, useDispach vs. bütün hooklar)
//todo, klasik bir js dosyasında doğrudan kullanılamaz,
//todo, ya bir react componenti içinde kullanılabilir,
//todo,(bir jsx return eder, ekranda görünen birşey )
//todo, ya da bir customHook içinde kullanılabilir.
//todo, ve top seviyede olması gerekli
//? buradaki çözüm böyle bir custom hook yazmaktır, çünkü bu sayede,
//? 1-hem react-component özellikleri kullanılır 
//? 2-hem default olarak bir jsx dönmez
//? 3-ve bütün componentlerde kullanılabilir.

//! customhook yapılması;
//! 1-dosya ismi use ile başlayacak (zorunluluk)
//! 2-klasör ismi (best-practise) hooks olursa ayırt edilmesi kolay olur.
//! 3-rafce ile iskelet oluşturulup yazılan kodlar içine alınır ve  içeri yazılan fonksiyon return edilir. (return { login, logout } gibi)
const useAuthCall = () => {
  //? state'ler global olarak redux içinde tutulduğu için onların güncellenemsi gerekli
  //? buradan gelecek değerlerin redux'a aktarılması gerekiyor.
  //? bunun için önce useDispatch hook import edip değişkene atanması lazım.
  const dispatch = useDispatch();

  const login = async (userInfo) => {
    //? önce fetchStart action creater çalışmaya başlıyor,
    dispatch(fetchStart());
    try {
      const { data } = await axios.post(
        `${BASE_URL}account/auth/login/`,
        userInfo
      );
      //? başarılı ise loginSuccess çalışıyor
      //? yukarıdan gelen data payload olarak loginSuccess'e veriliyor.
      dispatch(loginSuccess(data));
    } catch (error) {
      console.log(error);
      //! başarısız ise fetchFail çalışıyor
      dispatch(fetchFail());
    }
  };

  const logout = async () => {
    dispatch(fetchStart());
    try {
      await axios.post(`${BASE_URL}account/auth/logout/`);
      dispatch(logoutSuccess());
    } catch (error) {
      console.log(error);
      dispatch(fetchFail());
    }
  };

  return { login, logout };
};

export default useAuthCall;
