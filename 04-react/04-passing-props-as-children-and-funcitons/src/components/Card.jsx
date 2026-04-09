import React from 'react'

// const Card = (props) => {
//   return (
//     <div>
//       {props.name}
//     </div>
//   )
// }

// const Card = ({name}) => {
//   return (
//     <div>
//       {name}
//     </div>
//   )
// }


const Card = (props) => {
  return (
    <div>
      {props.children}
    </div>
  )
}
export default Card
