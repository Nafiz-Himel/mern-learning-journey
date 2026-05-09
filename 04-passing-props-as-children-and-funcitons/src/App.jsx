import { useState } from 'react'
import './App.css'
import Button from './components/Button'
import Card from './components/Card'

function App() {

  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count+1);
  }
  return (
    <div>
      <Button incrementCount = {handleClick} text="click me">
        <h1>{count}</h1>
      </Button>  
      <Card name = "Nafiz Himel">
        <h1>
          Best Web Dev Course
        </h1>

        <p> Trying to be consistent in this </p>
        <p>Will complete this course soon</p>
      </Card>

      <Card children='I am a children'>
        {/* HI, how are you? */}
      </Card>
    </div>
  )
}

export default App
