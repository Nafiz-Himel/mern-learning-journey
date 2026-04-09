import React from 'react'
// import myPic from '../assets/myPic.jpg'
import './UserCard.css'

const UserCard = (props) => {
  return (
    <div className='user-container' style={props.style} >
      <p id='user-title'>Nafiz Himel {props.name}</p>
      <img id='user-img' src= {props.image} alt="ntg" />
      <p id='user-desc'>Description of Nafiz HImel {props.desc}</p>
    </div>
  )
}

export default UserCard
