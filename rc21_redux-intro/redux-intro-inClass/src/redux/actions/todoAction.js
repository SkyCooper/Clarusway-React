import { ADD_TODO, CLEAR_TODO } from "../types/todoTypes";

export const addTodo = (payload) => {
  return { type: ADD_TODO, payload: payload };
};

export const clearTodo = () => {
  return { type: CLEAR_TODO };
};
