function TouchGameLevelOne() {

  const [size, setSize] = useState(0)
  const [position, setPosition] = useState({ x: null, y: null })
  const [mouseDown, setMouseDown] = useState(false)

  const endGame = useCallback(() => {
    console.log('fin jeu', endGame)
    return (
      <div>
        <input class="favorite styled"
          type="button"
          value="Add to favorites"></input>
      </div>
    )
  }, [])


  //si size > window.innerWidth && window.innerHeight on lance endgame fonction
  const getDotBigger = useCallback(() => {
    if (size > window.innerHeight) {
      console.log('good')
      endGame()
    } else {
      setSize(size + 80)
    }
  }, [setSize, size, endGame, window])

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

// .yellow-board {
//   width: 100%;
//   height: 100%;
//   position: fixed;
//   background-color: gold;
// }

// .board {
//   border-radius: 50%;
//   width: 120%;
//   height: 120%;
//   position: fixed;
//   background-color: black;
//   top: -10%;
//   left: -10%;
//   overflow: hidden;
// }

// .dot {
//   background: skyblue;
//   position: absolute;
//   border-radius: 50%;
// }
