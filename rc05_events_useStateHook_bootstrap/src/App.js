import Events from "./components/1-events/Events";
import Counter from "./components/2-classComponents/Counter";
import UseStateCounter from "./components/3-useStateHook/UseStateCounter";

function App() {
  return (
    <div>
      <Events/>
      <Counter/>
      <Counter count = {5}/>
      <UseStateCounter/>
    </div>
  );
}
export default App;
