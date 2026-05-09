import { useState } from 'react'
import './App.css'
import LogoutBtn from './components/LogoutBtn';
import LoginBtn from './components/LoginBtn';

function App() {
  const[isLoggedIn, setLoggedIn] = useState(true);
  


  if(!isLoggedIn) {
    return (
      <LoginBtn />
    )
  }
  // if(isLoggedIn) {
  //   return (
  //     <LogoutBtn />
  //   )
  // }
  // else {
  //   return (
  //     <LoginBtn />
  //   )
  // }

  return (
    <div>
      {/* {isLoggedIn ? <LogoutBtn /> : <LoginBtn />} */}

      <h1>Welcome everyone</h1>
      <div>
        {isLoggedIn && <LogoutBtn />}
      </div>
    </div>
  )

}

export default App
