import React, { useCallback, useEffect, useRef, useState } from 'react'
import Countdown from 'react-countdown'
import '../StyleTouchGame.css'

const Completionist = () => <span>You are good to go!</span>;

function TouchGameLevelTwo () {

  const BLACK_BOARD_SIZE = (window.innerWidth * 1.1)
  const blackboard = useRef(null)
  const [size, setSize] = useState(0)
  const [mousePosition, setMousePosition] = useState({ x: null, y: null })
  const [dcrb, setDcrb] = useState({ x: null, y: null })
  const [mouseDown, setMouseDown] = useState(false)
  const [gameOver, setGameOver] = useState(false)

  const endGame = () => {
    console.log('fin jeu', endGame)
    setGameOver(true)
  }

  function refreshPage() {
    window.location.reload();
  }
  const getDotBigger = useCallback(() => {
    const documentCenterX = window.innerWidth / 2
    const documentCenterY = window.innerHeight / 2
    const b = blackboard.current.getBoundingClientRect()
    const documentCenterXreferentialBackboad = documentCenterX - b.x
    const documentCenterYreferentialBackboad = documentCenterY - b.y
    setDcrb({ x: documentCenterXreferentialBackboad, y: documentCenterYreferentialBackboad })
    const calculX = documentCenterXreferentialBackboad - mousePosition.x
    const calculY = documentCenterYreferentialBackboad - mousePosition.y
    const distance = Math.sqrt((calculX * calculX) + (calculY * calculY))
    const rayonMax = distance + BLACK_BOARD_SIZE / 2
    setSize(size + 80)

    console.info(size, rayonMax * 2)
    if (size > rayonMax * 2) {
      endGame()
    }
  }, [setSize, size, endGame, mousePosition, BLACK_BOARD_SIZE])

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


  return (
    <>
      <div className="yellow-board"
        onMouseUp={() => setMouseDown(false)}>
        <div
          className="black-board"
          onMouseDown={initDot}

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
      {gameOver ? <button type="button" onClick={refreshPage}>Reload</button> : null}
      ({gameOver ?
        <Countdown date={Date.now() + 10000} className="countdown" >
          <Completionist />
        </Countdown> : null}
      ),
    </>
  )
}

export default TouchGameLevelTwo