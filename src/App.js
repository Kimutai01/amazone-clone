import "./App.css";
import Navbar from "./components/header/Navbar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Checkout from "./components/checkout/Checkout";
import Login from "./components/login/Login";

function App() {
  return (
    <Router>
      <div className="app">
        <Routes>
          <Route path="/" element={[<Navbar />, <Home />]} />
          <Route path="/checkout" element={[<Navbar />, <Checkout />]} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
