import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PortfolioPage from "@/pages/PortfolioPage";

function App() {
  return (
    <div className="portfolio-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
