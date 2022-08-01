import "./App.css";
import Navbar from "./components/header/Navbar";
import Home from "./components/home/Home";

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Navbar />
      {/* Home */}
      <Home />
    </div>
  );
}

export default App;
