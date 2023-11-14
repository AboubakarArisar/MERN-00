import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from '../src/Todo';
import Calc from '../src/Calc';
import Nav from '../src/Nav'
import { Navbar,Footer } from "../src/Nav";
const AppRoutes = () => {
  return (
    <Router>
      <div>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Nav />} />
          <Route path="/Todo" element={<Todo />} />
          <Route path="/Calc" element={<Calc />} />
        </Routes>
        <Footer/>
      </div>
    </Router>
  );
};
export default AppRoutes;
