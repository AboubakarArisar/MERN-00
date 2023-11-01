import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color , setColor] = useState();
  const colors = [
    "red",
    "pink",
    "black",
    "violet",
    "gray",
    "orange",
    "purple",
    "green",
    "blue",
    "yellow",
    "aqua"
  ];
  
  return (
    <>
      <h1>Color Picker</h1>
      <div className="container">
        <div className="circle"
        style={{backgroundColor: color === undefined? 'white' :color}} ></div>

      </div>
      <div className="circles">
        {colors.map(function (colorItem) {
          return (
            <div className="items"
              style={{ backgroundColor: colorItem }}
              key={colorItem}
              onClick={() => {
                setColor(colorItem);
              }}
            ></div>
          );
        })}
      </div>
      <div className="button">
        <button onClick={() => {
          setColor(undefined)
        }}>Reset</button>
      </div>
      <div className="history">
        <h1>History</h1>
        <table border="1">
        <th>
          #
        </th>
        <th>
          Color
        </th>
        </table>
      </div>
    </>
  )
}

export default App
