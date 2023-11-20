import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {Home} from "../src/App";
import {Navbar} from "../src/App";
import SignUp from "../src/SignUp";

const AppRoute = () => {
  return (
    <Router>
        <div>
        <Navbar/>
        <Routes>
            <Route path = "/" element={<Home/>}></Route>
            <Route path = "/SignUp" element={<SignUp/>}></Route>
        </Routes>
        </div>
    </Router>
  )
}

export default AppRoute