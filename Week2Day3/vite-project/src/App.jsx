import { useState } from 'react';
import './App.css';
function End({count}) {
  return(
  <>
  <div className="end-con">
    <h1>You have clicked {count} numbers of colors</h1>
  </div>
  </>
  )
}
function App() {
  const [color, setColor] = useState();
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);
  const [game, setGame] = useState(false);
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
      
 {game?null:     <h1>Color Picker</h1>}
      <div className="container">
        {game ? null : 
        <div className="circle" style={{ backgroundColor: color === undefined ? 'white' : color }}></div>
      }
      </div>
      <div className="circles">
        {game? null:
         colors.map(function (colorItem) {
              return (
                <div className="items"
                  style={{ backgroundColor: colorItem }}
                  onClick={() => {
                    setColor(colorItem);
                    setHistory([...history, colorItem]);
                    setCount(count + 1);
                  }}
                  key={colorItem}
                ></div>
              );
            })}
      </div>
      <div className="button">
        {game ? null : (
          <>
            <button onClick={() => {
              const preColor = history.length > 0 ? history.pop() : alert("no previous color already empty");
              setColor(preColor === color ? history.pop() : preColor);
            }}>Previous Color</button>

            <button onClick={() => {
              setColor(undefined);
            }}>Reset</button>

            <button onClick={() => {
              history.length === 0 ? alert("array is already empty") : setHistory([]);
            }}>
              Delete History
            </button>

            <button onClick={() => {
              setGame(true);
            }}>
              End Game
            </button>
          </>
        )}
      </div>
      <div className="history">
        {
        game?null:(
          <>
        
        <h1>History</h1>
        <div className="table-container">
          {game ? null :
          <table border="1">
            <thead>
              <tr>
                <th>#</th>
                <th>Color</th>
              </tr>
            </thead>
            <tbody>
              {history.map((color, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td style={{ backgroundColor: color }}></td>
                </tr>
              ))}
            </tbody>
          </table>
          }
        
        </div>
        </>)}
      </div>
      {game && <End count = {count} />};
    
</>  
);
}

export default App;
