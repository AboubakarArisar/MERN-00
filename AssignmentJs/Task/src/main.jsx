// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import Calc from './Calc'


// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     {/* <App /> */}
//     {/* <Todo /> */}
//     {/* <Router/> */}
//     <Calc/>
//   </React.StrictMode>,
// )
import React from "react";
import ReactDOM from "react-dom/client";
import AppRoutes from "../router/router.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRoutes />
  </React.StrictMode>
);
