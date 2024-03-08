import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import SignIn from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard"
import axios from "axios";
import { RxDashboard } from "react-icons/rx";

axios.defaults.baseURL = "http://localhost:3001/api";
axios.defaults.withCredentials = true;

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;
