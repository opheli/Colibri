import React, { useCallback, useState, useEffect } from 'react'
import '../StyleTouchGameLevelOne.css'

function TouchGameLevelOne() {

  const [size, setSize] = useState(0)
  const [position, setPosition] = useState({ x: null, y: null })
  
  //recupere le premier click pour affi
  const mouseClick = useCallback((event) => {
    setSize(size + 40)
    if (position.x === null) {
      setPosition({ x: event.clientX, y: event.clientY })
    }
  }, [setSize, setPosition, size, position])

  console.log(position.x, position.y)

  return (
    <div className="yellow-board">
      <div className="board" onClick={(event) => mouseClick(event)}>
        <div style={{
          background: 'skyblue',
          position: 'fixed',
          borderRadius: '50%',
          top: position.y - size / 2,
          left: position.x - size / 2,
          width: size,
          height: size,
        }}>
        </div>
      </div>
    </div>
  )
}

export default TouchGameLevelOne
