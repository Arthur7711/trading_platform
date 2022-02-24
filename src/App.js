import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./components/main/Main";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Openpage from "./pages/openPage/OpenPage";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Openpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
