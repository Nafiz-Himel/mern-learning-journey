import React, { useCallback, useEffect, useState, useRef } from "react";

const ExpensiveComponent = () => {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  const previousFUnction = useRef(null);

  const expensiveCalculation = useCallback(() => {
    console.log("Running expensive calculation...");
    let result = 0;
    for (let i = 0; i < 1000000000; i++) {
      result += i;
    }
    return result;
  }, [count]);

  useEffect(() => {
    if (previousFUnction.current) {
      if (previousFUnction.current === expensiveCalculation) {
        console.log("Function is the same, no re-render");
      } else {
        console.log("Function is different, re-rendering");
      }
    }
    previousFUnction.current = expensiveCalculation; // ✅ update current
  }, [expensiveCalculation]);

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Type something"
      />
      <p>Expensive Calculation Result: {expensiveCalculation()}</p>
      <button onClick={() => setCount(count + 1)}>Increment Count</button>
    </div>
  );
};

export default ExpensiveComponent;