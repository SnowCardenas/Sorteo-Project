import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Admin from "./Pages/Admin";
import SignIn from "./Pages/SignIn";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>
    </div>
  );
}

export default App;
