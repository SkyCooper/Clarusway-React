// const initialState = {
//   counter: 0,
// };

//? rxreducer snipet kısayolu
//? rx yazınca redux ile ilgili snipetler çıkar..

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

import { legacy_createStore as createStore, combineReducers } from "redux";
import counterReducer from "./reducers/counterReducer";
import todoReducer from "./reducers/todoReducer";

const rootReducer = combineReducers({
  count: counterReducer,
  todo: todoReducer,
});

export const store = createStore(rootReducer);
