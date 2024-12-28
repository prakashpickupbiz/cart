import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CartPage from "./pages/CartPage";
import Buttons from "./pages/Buttons";

const App = () => (
  <Router>
    <nav className="p-4 bg-gray-800 text-white flex justify-between">
      <Link to="/">Home</Link>
      <Link to="/cart">Cart</Link>
    </nav>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/cart" element={<CartPage />} />
      <Route path="/buttons" element={<Buttons />} />
    </Routes>
  </Router>
);

export default App;
