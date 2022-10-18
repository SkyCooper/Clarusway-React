import { useState } from "react";
import LifeCycleMethods from "./components/LifeCycleMethods";
import Timer from "./components/Timer";
import UseEffectHook from "./components/UseEffectHook";
import User from "./components/User";


function App() {
  const [show, setShow] = useState(true)
  return (
    <div className="container text-center mt-4">
      {/* <button onClick={() => setShow(!show)} className="btn btn-success">
        {show ? "Show" : "Hide"}
      </button> */}
      {/* {show && <LifeCycleMethods />} */}
      {/* {show && <UseEffectHook />} */}

      <User/>
    </div>
  );
}

export default App;
