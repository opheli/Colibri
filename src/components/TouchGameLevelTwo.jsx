import React, { useCallback, useState } from 'react'
import '../App.css'

function TouchGameLevelTwo() {

  const [size, setSize] = useState(0)
  const [position, setPosition] = useState({ x: null, y: null })

  const mouseClick = useCallback((event) => {
    const newSize = size + 40
    setSize(newSize)
    setPosition({ x: event.clientX - newSize / 2, y: event.clientY - newSize / 2 })
  }, [setSize, setPosition, size])

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

export default TouchGameLevelTwo