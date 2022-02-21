import { BrowserRouter, Route, Routes } from "react-router-dom";
import Openpage from "./pages/openPage/OpenPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Openpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
