import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";

const initialState = {
  counter: 0,
};

//? index içinden kopyladık ve string olan case'leri değişken olarak yazdık. tek fark bu..

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return { counter: state.counter + 1 };
    case DECREMENT:
      return { counter: state.counter - 1 };
    case CLEAR:
      return initialState;
    default:
      return state;
  }
};
export default counterReducer;
