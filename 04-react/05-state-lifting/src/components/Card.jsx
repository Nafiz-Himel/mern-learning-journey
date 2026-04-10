import React from 'react'

const Card = (props) => {
  return (
    <div>
      {/* {props.transfer} */}
      <input type="text" onChange={(e) => props.setName(e.target.value)} />
      <p>Name state variable's value in {props.title} : {props.name} </p>
    </div>
  )
}

export default Card
