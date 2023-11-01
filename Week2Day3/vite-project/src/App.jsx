import { useState } from 'react';
import './App.css';

function App() {
  const [color, setColor] = useState();
  const [count, setCount] = useState(0);
  const [history, setHistory] = useState([]);

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
        <div className="circle" style={{ backgroundColor: color === undefined ? 'white' : color }}></div>
      </div>
      <div className="circles">
        {colors.map(function (colorItem) {
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
        <button onClick={() => {
          setColor(undefined);
        }}>Reset</button>
      </div>
      <div className="history">
        <h1>History</h1>
        <div className="table-container">
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
        </div>
      </div>
    </>
  );
}

export default App;
