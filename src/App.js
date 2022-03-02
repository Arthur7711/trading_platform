import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/login/Login";
import Markets from "./pages/market/Markets";
import Myportfolio from "./pages/myPortfolio/MyPortfolio";
import Openpage from "./pages/openPage/OpenPage";
import Register from "./pages/register/Register";
import Toptraders from "./pages/topTraders/TopTraders";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Openpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Myportfolio />} />
        <Route path="/top" element={<Toptraders />} />
        <Route path="/market" element={<Markets />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
