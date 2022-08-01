import "./App.css";
import Navbar from "./components/header/Navbar";

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
