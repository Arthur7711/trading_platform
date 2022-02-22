import { BrowserRouter, Route, Routes } from "react-router-dom";
import Openpage from "./pages/openPage/OpenPage";
import Register from "./pages/register/Register";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Openpage />} />
        <Route path="/registration" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
