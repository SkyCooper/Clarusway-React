import { CLEAR, DECREMENT, INCREMENT } from "../types/counterType";

//? rxaction snipet kısayolu..
// export const first = (payload) => ({
//   type: second,
//   payload
// })


export const increment = () => {
  return { type: INCREMENT };
};

export const decrement = () => {
  return { type: DECREMENT };
};

export const clear = () => {
  return { type: CLEAR };
};
