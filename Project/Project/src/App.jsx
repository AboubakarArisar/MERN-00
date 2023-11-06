import { useState } from "react";

import "./App.css";
function Login() {
  return (
    <>
      <div className="container">
       
        <div className="box">
          <input type="text" placeholder="username" />
          <input type="password" placeholder="********" />
          <button>Login</button>
        </div>
      </div>
    </>
  );
}
function App() {
  return (
    <>
      <Login />
    </>
  );
}

export default App;
