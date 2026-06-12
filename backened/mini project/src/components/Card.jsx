import React from 'react'

const Card2 = (props) => {
  return (
     <div style={{border:'5px solid red',width:'200px'}}>
        <h3>student record</h3>
           <h3>studen name:{props.name}</h3>
           <h3>student class: {props.class}</h3>
    </div>
  )
}

export default Card2