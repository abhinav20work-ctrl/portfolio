import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import PortfolioPage from "@/pages/PortfolioPage";

function App() {
  return (
    <div className="portfolio-app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PortfolioPage />} />
        </Routes>
      </BrowserRouter>
      <Analytics />
    </div>
  );
}

export default App;
