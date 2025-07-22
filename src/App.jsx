import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";

function App() {
  return (
    <div className="app flex">
      <NavBar />
      <Routes>
        <Route path="/pet-clinicial-portal/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
