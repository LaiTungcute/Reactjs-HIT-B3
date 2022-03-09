import React, { useState } from 'react'

const Tung = () => {
    const [name, setName] = useState('Lai Tung');
  return (
    <div>
        <h1>{name}</h1>
        <button onClick={()=> setName('Lai Hoang Tung')}>Set Name</button>
    </div>
  )
}

export default Tung