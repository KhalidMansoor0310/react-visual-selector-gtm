import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import "./index.css";
import "./App.css";

import LandingPage from "./pages/LandingPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
