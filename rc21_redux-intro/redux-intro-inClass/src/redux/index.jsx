// const initialState = {
//   counter: 0,
// };

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

//! snippet ile yazıldığında default --> break olarak geliyor fakat öyle çalışmıyor, hata verir, ondan dolayı burası değişmeli...

//todo, yukarısı tek dosyadan çalışma ile örnek,
//todo, aşağısı klasörlü yapı kurulduğunda reducerlerı birleştirme ile ilgili örnek,

import { legacy_createStore as createStore, combineReducers } from "redux";
//? createStore ile oluşturmayı yapıp, combineReducers ile birleştirme yapılıyor.
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";


//? root ile yazmak best practice, bu birleşmiş manasına gelir..
const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
//? oluşturulan store içine reducer ataması yapılıyor.
