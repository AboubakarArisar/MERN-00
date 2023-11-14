import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Todo from '../src/Todo';
import Calc from '../src/Calc';
const AppRoutes = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Todo />} />
          <Route path="/Calc" element={<Calc />} />
        </Routes>
      </div>
    </Router>
  );
};
export default AppRoutes;
