// RC-25 REDUX - (GLOBAL STATE MANAGEMENT) - Global Yönetim Kütüphanesi
//* https://redux.js.org/    web adresi

// Global state sayısı eğer fazla ise ise REDUX kullanmak daha mantıklı çünkü;
// 1 - Dinamik yapılar için daha uygun
// 2 - DEBUG Tool'ları var, (reduxDevTool) - tek elden bütün statler yönetilebiliyor.

// react-redux react  ---------  redux js
// react olmadan sadece js ile de redux kullanılabilir

// ınstall
yarn add redux react-redux
npm install redux react-redux
// redux ile js'den gelenler, react-redux ise react için gerekli olanlar.

//? rx yazınca redux ile ilgili snipetler çıkar..

// sadece tek bir store içinde herşey var
// önce src altınsda reduz isimli bir klasör oluştur,
// sonra içine index.jsx veya reducer.jsx ikiside olur fark etmez sadece importları farklı, dosya oluştur.
import reducer from "./redux"
import reducer from "./redux/reducer.jsx"

// önce başlangıç durumu atanır
const initialState = {
  counter: 0,
};

// sonra reducer fonksiyonu yazılır.
//? rxreducer snipet kısayolu
//? rx yazınca redux ile ilgili snipetler çıkar..

//? action içinde type ve payload var bu şekilde destruct edip te kullanılabilir..
//? const reducer = (state = initialState, {type, payload}) => {

// const reducer = (state = initialState, action) => {
//   switch (action.type) {
//     case "INCREMENT":
//       return { counter: state.counter + 1 };
//     case "DECREMENT":
//       return { counter: state.counter - 1 };
//     case "CLEAR":
//       return initialState;
//! burada state sıfırlanabilir veya başlangıç değerine atanır buradaki gibi..
//     default:
//       return state;
//   }
// };
// export default reducer;