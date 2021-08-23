import React, { useCallback, useState, useEffect } from 'react'
import '../StyleTouchGameLevelOne.css'

function TouchGameLevelOne() {

  const [size, setSize] = useState(0)
  const [position, setPosition] = useState({ x: null, y: null })
  const [mouseDown, setMouseDown] = useState(false)

  const getDotBigger = useCallback(() => {
    setSize(size + 80)
  }, [setSize, size])

  const initDot = useCallback((event) => {
    if (position.x === null) {
      setPosition({ x: event.clientX, y: event.clientY })
      getDotBigger()
      setMouseDown(true)
    }
  }, [position, setPosition, getDotBigger, setMouseDown])

  useEffect(() => {
    const interval = setInterval(() => {
      if (mouseDown) {
        getDotBigger()
      }
    }, 300)
    return () => clearInterval(interval)
  }, [mouseDown, getDotBigger])

  return (
    <div className="yellow-board">
      <div className="board" onMouseDown={(e) => { initDot(e) }}
      >
        <div
          className="dot"
          onMouseDown={() => { setMouseDown(true) }}
          onMouseUp={() => setMouseDown(false)}
          style={{
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