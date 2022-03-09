import React, { useState } from 'react'

const HaUI = () => {
  const [color, setColor] = useState('red');

  return (
   <div id="header">

    <h1 style={{color: `${color}`}}>Hello world</h1>

     <button onClick={() => setColor('blue')}>Set color</button>
   </div>
  )
}

export default HaUI
