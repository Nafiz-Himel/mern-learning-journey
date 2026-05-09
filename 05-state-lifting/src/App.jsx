import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {

  //create state
  //manage state
  //change state
  //sync

  const [name, setName] = useState('');
  return (
    <>
     <div>
      <Card title="Card1" transfer="Parent to child" name={name} setName={setName}/>
      <Card title="Card2" transfer="Parent to child" name={name} setName={setName}/>
      <p>I am inside Parent Componen and Value of name is {name}</p>
     </div>
    </>
  )
}

export default App
