import "./Counter.css";
import { useDispatch, useSelector } from "react-redux";
import { clear, decrement, increment } from "../../redux/actions/counterAction";

const Counter = () => {
  const dispatch = useDispatch();
  // const counter = useSelector((state) => state.counter);
  const { counter } = useSelector((state) => state.count);
  return (
    <div className="app">
      <h2 className="counter-header">Counter With Redux</h2>
      <h1>{counter}</h1>
      <div>
        <button
          className="counter-button positive"
          // onClick={() => dispatch({ type: "INCREMENT" })}
          onClick={() => dispatch(increment())}
        >
          increase
        </button>
        <button
          className="counter-button zero"
          // onClick={() => dispatch({ type: "CLEAR" })}
          onClick={() => dispatch(clear())}
        >
          reset
        </button>
        <button
          className="counter-button negative"
          // onClick={() => dispatch({ type: "DECREMENT" })}
          onClick={() => dispatch(decrement())}
        >
          decrease
        </button>
      </div>
    </div>
  );
};

export default Counter;
