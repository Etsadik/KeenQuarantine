import React from 'react';

const NewNeighborButton = (props) => {
  return(
    <button onClick={ () => props.onShowForm() } >Sign Up</button>
  )
}

export default NewNeighborButton;
