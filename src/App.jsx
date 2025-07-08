import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./home/components/Home";

function App() {
  return (
    <Routes>
      <Route path="/pet-clinicial-portal/" element={<Home />} />
    </Routes>
  );
}

export default App;
