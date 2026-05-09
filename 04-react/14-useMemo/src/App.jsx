import { useMemo, useState } from "react";

import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [input, setinput] = useState("");

  function expensiveTask(num) {
    console.log("Expensive task is running");
    for (let i = 0; i < 1000000000; i++) {}
    return num * 2;
  }

  let doubleValue = useMemo(() => expensiveTask(input), [input]);

  return (
    <>
      <div>
        <button onClick={() => setCount(count + 1)}>Increment</button>

        <div>Count: {count};</div>

        <input
          type="number"
          placeholder="enter number"
          value={input}
          onChange={(e) => setinput(e.target.value)}
        />

        <div>Double Value: {doubleValue};</div>
      </div>
    </>
  );
}

export default App;
