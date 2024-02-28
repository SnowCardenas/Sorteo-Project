import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </div>
  );
}

export default App;
