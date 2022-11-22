//? js dosyasıdır,
//? best-practise service klasörü içinde olur

// const instance = axios.create({
//   baseURL: "https://some-domain.com/api/",
//   timeout: 1000,
//   headers: { "X-Custom-Header": "foobar" },
// });
//? yukarıdaki orjinal hali, aşağıdaki gibi düzenledik.

import axios from "axios";

//! react-componenti olmadığı için useSelector kullanamayız ve bundan dolayı token'i çağıramayız.
//todo, 1-piyasada localStorage dan okunuyor. (redux-persist kayıt ediyor.)
//* local storage'dan token'ı oku
const escapedToken = JSON.parse(localStorage.getItem("persist:root"))?.token;
// escape karakterleri silmek için yeniden parse ediliyor.
const token = escapedToken && JSON.parse(escapedToken);
// ama token logout iken null, giriş yapıldığı anda axios çalışıyor ve bazen token henüz localstorage geçmediğinden null kalıyor, bundan dolayı hata verebiliyor.

//* Token gerektiren istekler icin bir baska instance olusutur.
export const axioswithToken = axios.create({
  baseURL: "https://13673.fullstack.clarusway.com/",
  headers: { Authorization: `Token ${token}` },
  //! interseptor kullanınca gerek kalmıyor.
});



//? siteden default hali; (interseptor)
// axios.interceptors.request.use(function (config) {
//     // Do something before request is sent
//     return config;
//   }, function (error) {
//     // Do something with request error
//     return Promise.reject(error);
//   });

//* Instance, token'nın ilk degirini okuyarak istekte bulunur.
//* Dolayisiyla bazen localSotrage'Dan token alinmadan ilk degeri (null) ile istek yapilmis olabilir.
//* Bunun cozumu icin axios interceptors kullanilabilir.
//* interceptor belirtilen her axios instance calismadan once calisan bir metodtur.
//* Dolayısıyla once yeni token okunmasini saglar.

axioswithToken.interceptors.request.use((config) => {
  console.log("interseptor running");
  if (!config.headers["Authorization"]) {
    config.headers["Authorization"] = `Token ${token}`;
  }
  return config;
});

//! ------------------------------------------------------
//! Bunlara alternatif olarak eger axios instance kullanimini
//! custom hook icerisinde yaparsak daha kolay bir sekilde token'a
//! erismek mumkun olur.
//! ------------------------------------------------------

//todo, 2-güzel çözüm customHook yazmaktır,
