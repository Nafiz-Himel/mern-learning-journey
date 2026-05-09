import './App.css'
import { useState, useEffect, useRef } from 'react'; 

function App() {
  // const [count, setCount] = useState(0);
  // // let val = 1;
  // let val = useRef(0);
  // let btnRef = useRef();

  // function handleIncrement() {
  //   setCount(count + 1);
  //   val.current += 1;
  //   console.log('value of val: ', val.current);
  // }

  // function changeColor() {
  //   btnRef.current.style.color = 'white';
  //   btnRef.current.style.backgroundColor = 'red';
  // }

  // //it runs on every render
  // useEffect(() => {
  //   console.log('I am rendered again.');
  // });  


  const [time, setTime] = useState(0);

  let timerRef = useRef(null);


  function startTimer() {
    if (timerRef.current) return;
    timerRef.current = setInterval(() => {
      setTime(prev => prev + 1); // stale closure
    }, 1000);
  }
  function stopTimer() {
    clearInterval(timerRef.current);
    timerRef.current = null;
  }
  function resetTimer() {
    stopTimer();
    setTime(0);
  }


  return (
    <>
      {/* <div>
        <button 
        ref={btnRef}
        onClick={handleIncrement}>
          Increment
        </button>
        <br/>

        <button onClick={changeColor}>
          Change color of 1st button.
        </button>
        <br />
      </div>

      <div>
        Count: {count};
      </div> */}


      <div>
      <h1>StopWatch: {time} seconds</h1>
      <button onClick={startTimer}>
        Start
      </button>
      <br/> <br/>

      <button onClick={stopTimer}>
        Stop
      </button>
      <br/> <br/>

      <button onClick={resetTimer}>
        Reset
      </button>
    </div>


    </>
  )
}

export default App
