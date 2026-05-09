import './App.css'

function App() {

  // function handleClick() {
  //   alert("I am Clicked");
  // }

  // function handleMouseOver() {
  //   alert("Did you bring mouse on para?");
  // }

  function handleInputChange(e) {
    // console.log("Value has been cahnged in input");
    console.log("Value tillnow: ", e.target.value);
  }


  function handleSubmit(e) {
    e.preventDefault();
    //i am writing my custom behaviour down
    alert("Do you want to submit form?");
  }
 
  return (
    <>
      <div>


        <button onClick={() => alert("Button has been clicked")}>
          Click me
        </button>

        <form onSubmit={handleSubmit}>
          <input 
            type="text" 
            onChange={(e) => 
            handleInputChange(e)
            // console.log("Value tillnow: ", e.target.value)
            } />

            <button type='submit'>Submit</button>
        </form>


        <p onMouseOver={() => {
        alert("Did you bring mouse on para?");
      }} 
      style={{border: "1px solid black", padding: "8px", marginBottom: "2px"}}
      >
        This is paragrpah.
      </p>


      <button onClick={
        () => {
          alert("I am Clicked");
        }
      }>
        Click me
      </button>
      </div>
    </>
  )
}

export default App
