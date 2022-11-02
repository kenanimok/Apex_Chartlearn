import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import SummaryUser from "./pages/dashboard/summaryUser/summaryUser";
import MixedChart from "./components/chart/mixchart/mixchart";
import Kenmix from "./components/chart/kenMix/kenmix";
import ProgressBar from "./components/chart/progess/progress";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SummaryUser />} />
          <Route path="/mix" element={<MixedChart />} />
          <Route path="/kenmix" element={<Kenmix />} />
          <Route path="/progess" element={<ProgressBar />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
