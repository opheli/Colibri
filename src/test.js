
import React, { useCallback, useState } from 'react';
import './App.css';

function App() {

  const [size, setSize] = useState({ radius: 0 });
  const [position, setPosition] = useState({ x: 0, y: 0 });


  const mouseClick = useCallback((event) => {
    setSize({ radius: size.radius + 40 });
    setPosition({ x: event.clientX, y: event.clientY });
  },[setSize, setPosition, size])

  console.log("position", position)
  return (
    <div className="board" onClick={(event) => mouseClick(event)}
    >
     
      <svg viewBox="0 0 600 900" fill="skyblue">
        <circle cx={position.x} cy={position.y} r={size.radius} />
      </svg>
    </div>
  )
}

export default App
