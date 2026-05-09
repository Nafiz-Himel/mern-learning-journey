import UserCard from "./components/UserCard"
import './App.css'
import imge from "./assets/myPic.jpg"

function App() {

  return (
    <>
      <div className='container'>
        <UserCard name = "Rayhan" desc="desc1" image={imge} style= {{"borderRadius": "10px"}}/> 
        <UserCard name = "Rayhaaan" desc="desc2" image={imge}/>
        <UserCard name= "Rayhaaaaan" desc="desc3" image={imge}/>
      </div>
    </>
  )
}

export default App
