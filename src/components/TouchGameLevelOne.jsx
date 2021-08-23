import React, { useCallback, useState } from 'react'
import '../StyleTouchGameLevelOne.css'

function TouchGameLevelOne() {

  const [size, setSize] = useState(0)
  const [position, setPosition] = useState({ x: null, y: null })

  const mouseClick = useCallback((event) => {
    const newSize = size + 40
    setSize(newSize)
    if (position.x === null && position.y === null) {
    setPosition({ x: event.clientX - newSize/2, y: event.clientY - newSize/2git})
    }
  }, [setSize, setPosition, size, position])
console.log(position.x)
  return (
    <div className="yellow-board">
      <div className="board" onClick={(event) => mouseClick(event)}>
        <div style={{
          background: 'skyblue',
          position: 'fixed',
          borderRadius: '50%',
          top: position.y,
          left: position.x,
          width: size,
          height: size,
        }}>
        </div>
      </div>
    </div>
  )
}

export default TouchGameLevelOne