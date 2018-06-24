import React from 'react';

const Display = (props) => {
  return (
    <div id="display">
      <span id="displaytext">{ props.text }</span>
    </div>
  )
}

export default Display;