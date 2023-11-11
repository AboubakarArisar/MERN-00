import { useState } from "react";
import check from "./lottie.json";
import Lottie from "lottie-react";
import "./App.css";
import TRXDisplay from "../Components/TRXDisplay";

function App() {
  const [result, setResult] = useState(true);
  const [projectName, setProjectName] = useState("");
  const [projectAmount, setProjectAmount] = useState("");
  const [transactionId, setTransactionId] = useState("");
  const [name,setName] = useState([]);
  const [amount,setAmount] = useState([]);
  const [count,setCount] = useState(0);
  const handleClick = () => {
    
      setResult(null);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  
    if (!projectName.trim()) {
      alert("Project Name is required");
    } else {
      setName([...name, projectName]);
      setProjectName("");
    }
  
    if (!projectAmount.trim()) {
      alert("Project Amount is required");
    } else {
      setAmount([...amount, projectAmount]);
      setProjectAmount("");
    }
  
    if (!transactionId.trim()) {
      alert("Transaction ID is required");
    } else {
      setTransactionId("");
    }
  
    setCount(count + 1); 
    setResult(false);
  };
  
  return (
    <>
      {result ? (
        <>
          <h1 className="bg-black text-5xl h-100 text-white px-5 py-2 text-center">
            Transaction Entry
          </h1>
          <div className="container flex justify-center items-center">
            <div className="content m-5 rounded-2xl">
              <form onSubmit={handleSubmit}>
                <div className="items flex flex-col justify-center items-center">
                  <label htmlFor="p-name" className="text-white px-5 py-2 m-2">
                    Project Name
                  </label>
                  <input
                    required
                    type="text"
                    name="p-name"
                    placeholder="Enter Project name"
                    className="rounded px-5 py-2 m-3 text-center"
                    value={projectName}
                    onChange={(e) => setProjectName(e.target.value)}
                  />
                </div>
                <div className="items flex flex-col justify-center items-center">
                  <label
                    htmlFor="p-amount"
                    className="text-white px-5 py-2 m-2"
                  >
                    Project Amount
                  </label>
                  <input
                    required
                    type="number"
                    name="p-amount "
                    placeholder="Enter Project Amount"
                    className="rounded px-5 py-2 m-3 text-center"
                    value={projectAmount}
                    onChange={(e) => setProjectAmount(e.target.value)}
                  />
                </div>

                <div className="items flex flex-col justify-center items-center">
                  <label htmlFor="p-trx" className="text-white px-5 py-2 m-2">
                    Transaction ID
                  </label>
                  <input
                    required
                    type="text"
                    name="p-trx "
                    placeholder="Enter Transacion ID"
                    className="rounded px-5 py-2 m-3 text-center"
                    value={transactionId}
                    onChange={(e) => setTransactionId(e.target.value)}
                  />
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="rounded bg-yellow-500 px-5 py-2 m-5 w-28 hover:bg-yellow-300"
                    type="submit"
                  >
                    Pay Now
                  </button>
                </div>
              </form>
            </div>
          </div>
        </>
      ) :  result === null ? (
                  <TRXDisplay count={count} name={name} amount = {amount} result = {result} setResult = {setResult} />
        
      ):
       (
        <>
          <h1 className="bg-black text-5xl h-100 text-white px-5 py-2 text-center">
            Transaction Status
          </h1>
          <div className="container flex justify-center items-center">
            <div className="content rounded-xl flex justify-center flex-col items-center">
              <Lottie
                className="w-72 h-72"
                animationData={check}
                loop={false}
                speed={1}
              />
              <h1 className="text-2xl text-white text-center">
                Transaction succeeded
              </h1>
              <div className="m-5 px-3 py-2 flex justify-center items-center">
                <button
                  className="rounded bg-yellow-500 px-5 py-2 m-5 w-50 h-12 hover:bg-yellow-300"
                 
                  onClick={handleClick}
                >
                  See Transactions
                </button>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default App;
