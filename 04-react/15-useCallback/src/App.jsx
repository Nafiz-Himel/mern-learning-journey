import { useCallback, useState } from 'react'
import './App.css'
import ChildComponent from './components/ChildComponent';

function App() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => { 
    setCount(prev => prev + 1); // ✅ functional update, stale closure এড়াতে
  }, []);



  // function handleClick() {
  //   setCount(count + 1);
  // }

  return (
    <>
      <div>
        <div>
          Count: {count};
        </div>
        <div>
          <button onClick={handleClick}>
            Increment
          </button>


          <br /><br />
          <div>
            <ChildComponent 
              buttonName="Click me" 
              handleClick={handleClick}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default App