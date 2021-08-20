<svg xmlns="http://www.w3.org/2000/svg">
<circle id="pikapika" cx="50" cy="50" r="50"/>
</svg>
      <circle id="pikapika" cx="50" cy="50" r="50"/>
      </svg>

  {/* <img
        alt=""
        src="/rond.svg"
        width={size.radius}
       
      /> */}

      const continuClick = (e) => {
        setSize({ width: size.width + 100, height: size.height + 100 });
      }
      const startClick = (e) => {
        setSize({ width: 100, height: 100 });
      }
     
      
      
  
      return (
        <div className= "board" onClick={() => startClick(setSize)}>
          <img onClick={() => continuClick(setSize)}