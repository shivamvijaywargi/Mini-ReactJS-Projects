import { useState } from "react";
import "./App.css";

function App() {
  // useState hook to manage the state
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <h1>React + useState</h1>
      <div className="card">
        {/* onClick handler to do something on button click */}
        {/* setCount is used here to update the count value and re-render the UI */}
        <button onClick={() => setCount((count) => count + 1)}>
          {/* count is displayed here using {} so that the value is dynamic */}
          count is {count}
        </button>
        <p>Click on the count button to increase the count</p>
      </div>
    </div>
  );
}

export default App;
