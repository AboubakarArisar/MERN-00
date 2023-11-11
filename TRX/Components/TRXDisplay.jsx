import React from "react";
import "../src/App.css";

const TRXDisplay = (props) => {
  const handleButton = () => {
    props.setResult(true);
  };

  return (
    <>
      <h1 className="bg-black text-5xl h-100 text-white px-5 py-2 text-center">
        Transaction Display
      </h1>
      <div className="button flex justify-center items-center">
        <button
          className="bg-yellow-500 m-5 rounded text-center text-whit"
          onClick={() => {
            handleButton();
          }}
        >
          Add Transaction
        </button>
      </div>

      <div className="container flex justify-center items-center">
        <div className="content table-parent rounded-xl flex justify-start flex-col items-center">
          <table className="text-white text-center">
            <thead>
              <tr>
                <th>#</th>
                <th>Project Name</th>
                <th>Project Amount</th>
              </tr>
            </thead>
            <tbody>
              {props.name.map((name, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{name}</td>
                  <td className="amount">{props.amount[index]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default TRXDisplay;
