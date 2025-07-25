import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./components/home/Home";
import NavBar from "./components/navbar/NavBar";
import Patients from "./components/Patients/Patients";

function App() {
  return (
    <div className="app flex">
      <NavBar />
      <Routes>
        <Route path="/pet-clinicial-portal/home/" element={<Home />} />
        <Route path="/pet-clinicial-portal/patients/" element={<Patients />} />
      </Routes>
    </div>
  );
}

export default App;
