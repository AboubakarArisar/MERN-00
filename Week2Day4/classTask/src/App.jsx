import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [date, setDate] = useState(new Date());
  const [history, setHistory] = useState([]);
  useEffect(() => {}, []);
  return (
    <>
      <h1>Count History Tracker</h1>
      <hr />
      <div className="parentCon">
        <div className="container">
          <h1>Button Game</h1>
          <div className="buttons">
            <button
              onClick={function () {
                setCount(count + 1);
                const oldHistory = [...history];
                oldHistory.push({ date: new Date(), number: count });
                setHistory(oldHistory);
              }}
            >
              {count}
            </button>
            <button
              onClick={function () {
                setCount(0);
              }}
            >
              Reset
            </button>
          </div>
        </div>

        <div className="history">
          <h1>Record of time</h1>  
          <div className="table">
            <table border={1}>
              <thead>
                <tr>
                  <th>Time</th>
                  <th>Count</th>
                </tr>
              </thead>
              <tbody>
                {history.map(function (historyItem) {
                  return (
                    <tr key={historyItem}>
                      <td>
                        {historyItem.date.getHours()} :{" "}
                        {historyItem.date.getMinutes()} :{" "}
                        {historyItem.date.getSeconds()}
                      </td>
                      <td>{historyItem.number}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
