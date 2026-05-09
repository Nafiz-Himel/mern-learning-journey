import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement, reset, incrementByAmount } from './features/counter/counterSlice'; // ✅ একটাই রাখো
import './App.css'


function App() {

  const [amount, setAmount] = useState(0);
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  function handleIncrementClick() {   
    dispatch(increment());
  }
  function handleDecrementClick() {  
    dispatch(decrement());
  }
  function handleResetClick() {
    dispatch(reset());
  }
  function handleIncAmounttClick() {
    dispatch(incrementByAmount(Number(amount)));
  }

  return (
    <>
      <div className="container">
        <button onClick={handleIncrementClick}>+</button>
        <p>Count: {count}</p>
        <button onClick={handleDecrementClick}>-</button>
        <button onClick={handleResetClick}>Reset</button> 

        <input type="number" value={amount} placeholder='Enter Amount' onChange={(e) => setAmount(e.target.value)} />
        <button onClick={handleIncAmounttClick}>Increment by Amount</button> 

      </div>
    </>
  )
}

export default App