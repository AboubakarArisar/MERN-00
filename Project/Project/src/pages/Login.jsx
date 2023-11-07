import { useState } from "react";

import "./index.css";


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

  export default Login;