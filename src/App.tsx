import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import NotFound from "./Pages/NotFound";
import Portfolio from "./Components/portfolio/Portfolio";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} errorElement={<NotFound />} />
        <Route path="/portfolio/:name" element={<Portfolio />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
