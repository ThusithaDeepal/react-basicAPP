import React from 'react'

function FunctionalPropComponent(props) {
  return (
    <div>
      <h1>functional component with props</h1>
      <h2>Im {props.name} from school {props.school}</h2>
      <h3>{props.children}</h3>
    </div>
  )
}


export default FunctionalPropComponent;

