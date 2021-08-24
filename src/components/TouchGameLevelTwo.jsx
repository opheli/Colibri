import React, { useCallback, useEffect, useRef, useState } from 'react'
import '../StyleTouchGame.css'

function TouchGameLevelTwo () {

  const BLACK_BOARD_SIZE = 500
  const blackboard = useRef(null)
  const [size, setSize] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [mouseDown, setMouseDown] = useState(false)

  const calculX = window.innerWidth / 2 - mousePosition.x
  const calculY =  window.innerHeight / 2 - mousePosition.y
  const distance = Math.sqrt((calculX * calculX) + (calculY * calculY))
  const rayonMax = distance + BLACK_BOARD_SIZE / 2

  const endGame = () => {
    console.log('fin jeu', endGame)
    //ici le button of Bharathi
  }

  const getDotBigger = useCallback(() => {
    if (size > rayonMax*2) {
      endGame()
    } else {
      setSize(size + 80)
    }
  }, [setSize, size, rayonMax, endGame])

  const initDot = useCallback((event) => {
    if (mousePosition.x === null) {
      const b = blackboard.current.getBoundingClientRect()
      setMousePosition({
        x: event.clientX - b.x,
        y: event.clientY - b.y,
      })
      getDotBigger()
      setMouseDown(true)
    }
  }, [mousePosition, setMousePosition, getDotBigger, setMouseDown])

  useEffect(() => {
    const interval = setInterval(() => {
      if (mouseDown) {
        getDotBigger()
      }
    }, 300)
    return () => clearInterval(interval)
  }, [mouseDown, getDotBigger])

  // useEffect(() => {
  //   console.info(blackboard.current.offsetLeft)
  // }, [])

  return (
    <div className="yellow-board">
      <div
        className="black-board"
        onMouseDown={initDot}
        onMouseUp={() => setMouseDown(false)}
        ref={blackboard}
        style={{ width: BLACK_BOARD_SIZE }}
      >
        <div
          className="dot"
          onMouseDown={() => { setMouseDown(true) }}
          style={{
            top: mousePosition.y - size / 2,
            left: mousePosition.x - size / 2,
            width: size,
            height: size,
          }}>
        </div>
      </div>
    </div>
  )
}

export default TouchGameLevelTwo