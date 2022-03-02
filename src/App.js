import { BrowserRouter, Route, Routes } from "react-router-dom";
import Charts from "./pages/charts/Charts";
import Dashboard from "./pages/dashboard/Dashboard";
import Discover from "./pages/discover/Discover";
import Login from "./pages/login/Login";
import Markets from "./pages/market/Markets";
import Myportfolio from "./pages/myPortfolio/MyPortfolio";
import News from "./pages/news/News";
import Openpage from "./pages/openPage/OpenPage";
import Register from "./pages/register/Register";
import Scanner from "./pages/scanner/Scanner";
import Settings from "./pages/settings/Settings";
import Toptraders from "./pages/topTraders/TopTraders";
import Tradechart from "./pages/tradeChart/Tradechart";
import Trades from "./pages/trades/Trades";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Openpage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/portfolio" element={<Myportfolio />} />
        <Route path="/top" element={<Toptraders />} />
        <Route path="/market" element={<Markets />} />
        <Route path="/scanner" element={<Scanner />} />
        <Route path="/charts" element={<Charts />} />
        <Route path="/trade-chart" element={<Tradechart />} />
        <Route path="/news" element={<News />} />
        <Route path="/trades" element={<Trades />} />
        <Route path="/discover" element={<Discover />} />
        <Route path="/settings" element={<Settings />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
