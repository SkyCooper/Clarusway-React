import Events from "./components/1-events/Events";
import Counter from "./components/2-classComponents/Counter";

function App() {
  return (
    <div>
      <Events/>
      <Counter/>
      <Counter count = {5}/>
    </div>
  );
}
export default App;
